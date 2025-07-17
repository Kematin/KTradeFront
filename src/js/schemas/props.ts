import type { Dispatch, SetStateAction } from "react";

export type ActivePage = "inventory" | "onSale" | "sold";

export interface NavbarProps {
  activePage: ActivePage;
}

export interface UploadImageProps {
  selectedImage: string | null;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
}

export interface AddSalePopupProps {
  onClose: () => void;
}
