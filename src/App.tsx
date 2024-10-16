import { ChangeEvent, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [image, setImage] = useState<null | File>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] || null);
  };

  const imgClearHandler = () => {
    if (imgRef.current?.value) {
      imgRef.current.value = "";
    }
    setImage(null);
  };

  return (
    <div className="App">
      <input
        type="file"
        ref={imgRef}
        accept="image/*"
        onChange={inputChangeHandler}
      />
      {image && <button onClick={imgClearHandler}>Clear Image</button>}
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  );
}
