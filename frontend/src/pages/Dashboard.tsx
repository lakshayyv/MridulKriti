import { FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { upload } from "../api/image";
import { fileToBase64 } from "../utils/helpers";
import ImageViewBox from "../components/ImageViewBox";
import { useRecoilRefresher_UNSTABLE, useSetRecoilState } from "recoil";
import { LoaderAtom } from "../store/atoms/app";
import { AllImageAtom } from "../store/atoms/image";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);

  const setLoader = useSetRecoilState(LoaderAtom);
  const allImageRefresher = useRecoilRefresher_UNSTABLE(AllImageAtom);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    if (image) {
      try {
        const base64String = await fileToBase64(image);
        const success = await upload(title, description, base64String);

        if (success) {
          setTitle("");
          setDescription("");
        }
      } catch (error) {
        console.error("Error converting image to base64:", error);
      }
    }
    allImageRefresher();
    setLoader(false);
  };

  return (
    <div className="w-full flex">
      <div className="w-1/2 flex justify-center">
        <form onSubmit={handleSubmit} className="grid gap-y-10">
          <h1 className="font-bold text-5xl">Add an Image</h1>
          <Input
            label="Title"
            placeholder="Enter title"
            value={title}
            cb={setTitle}
            type="text"
          />
          <Input
            label="Description"
            placeholder="Enter description"
            value={description}
            cb={setDescription}
            type="text"
          />
          <Input
            label="Image"
            placeholder="Select an image"
            imageCB={setImage}
            type="file"
          />
          <Button label="Submit" type="submit" />
        </form>
      </div>
      <div className="w-1/2">
        <ImageViewBox />
      </div>
    </div>
  );
}

export default Dashboard;
