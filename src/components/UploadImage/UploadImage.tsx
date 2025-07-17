import { useRef } from "react";
import styles from "./UploadImage.module.css";

import type { ChangeEvent } from "react";
import type { UploadImageProps } from "../../js/schemas/props";

export function UploadImage({
  selectedImage,
  setSelectedImage,
}: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (!validTypes.includes(file.type)) {
      alert(`Unsupported file type. Allowed: ${validTypes.join(", ")}`);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setSelectedImage(reader.result);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };

    reader.onerror = () => {
      console.error("Error reading file");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    reader.readAsDataURL(file);
  };

  const triggerFileInput = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={styles.itemimg}
      onClick={triggerFileInput}
      style={{
        cursor: "pointer",
        ...(selectedImage
          ? {
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}
    >
      {!selectedImage && (
        <span className={styles.uploadtext}>+ Upload Image</span>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
}
