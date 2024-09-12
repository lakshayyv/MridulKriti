import { useRecoilValueLoadable } from "recoil";
import { AllImageAtom } from "../store/atoms/image";

function ImageViewBox() {
  const images = useRecoilValueLoadable(AllImageAtom);

  return (
    <div className="p-10">
      {images.state === "loading" ? (
        <div>Loading...</div>
      ) : images.contents.length === 0 ? (
        <div>No image uploaded for now...</div>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {images.contents.map((image: any) => {
            return (
              <div>
                <img
                  src={image.url}
                  className="w-full aspect-square shadow-lg object-contain"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ImageViewBox;
