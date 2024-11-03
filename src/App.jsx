import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchForm from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import { fetchArticlesWithTopic } from "./articles-api.js/articles-api.js";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchArticlesWithTopic(page, query);
        if (data.results.length === 0) {
          toast.error("No images found!");
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
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

  const handleSearch = (searchTerm) => {
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

  const openModal = (image) => {
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
