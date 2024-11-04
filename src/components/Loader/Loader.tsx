import { Audio } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: "block" }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
