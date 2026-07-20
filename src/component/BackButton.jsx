import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex text-base dark:text-white  items-center"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="size-6" /> Back
    </button>
  );
};

export default BackButton;
