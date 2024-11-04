import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchForm from "./components/SearchBar/SearchBar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.js";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.js";
import ImageModal from "./components/ImageModal/ImageModal.js";
import { fetchArticlesWithTopic } from "./articles-api.ts/articles-api.js";
import Loader from "./components/Loader/Loader.js";
import { FetchResponse, Image } from "./types/types.js";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const data: FetchResponse = await fetchArticlesWithTopic(page, query);
        console.log(data);
        if (data.results.length === 0) {
          toast.error("No images found!");
        } else {
          setImages((prevImages) => [
            ...prevImages,
            ...(data.results as Image[]),
          ]);
          setTotalPages(data.total_pages);
        }
      } catch {
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
