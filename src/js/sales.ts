import { postData, uploadImage } from "./api";
import { API_URL } from "./env";

import type { SaleRequestData, SaleRawData } from "./schemas/sales";

export async function saleCustomCreate(data: SaleRawData) {
  if (!validateData(data)) {
    return;
  }

  try {
    let imageUrl = "";

    if (data.selectedImage?.startsWith("data:image")) {
      const file = base64ToFile(data.selectedImage);
      const uploadResponse = await uploadImage(file);
      imageUrl = `${API_URL}/image/${uploadResponse.filename}`;
    }

    const requestData: SaleRequestData = {
      sale_data: {
        quantity: data.countValue,
        purchase_price: parseFloat(data.fromValue) || 0,
        selling_price: parseFloat(data.toValue) || 0,
        commission: parseInt(data.comValue) || 0,
        source_marketplace: data.sourceMarketplace,
        target_marketplace: data.targetMarketplace,
        currency: data.currency,
      },
      custom_item_data: {
        name: data.nameValue,
        image_url: imageUrl,
        price: parseFloat(data.toValue) || 0,
        currency: data.currency,
        game_type: data.gameType,
      },
    };

    const response = await postData<{ success: boolean }, SaleRequestData>(
      "sale/custom-with-sale",
      requestData
    );

    if (response.success) {
      data.PopupOnClose();
    }
  } catch (error) {
    console.error("Error creating sale:", error);
    // TODO notify toast
  }
}

function validateData(data: SaleRawData): boolean {
  if (!data.nameValue.trim()) {
    alert("Item name is required");
    return false;
  }

  if (!data.selectedImage) {
    alert("Image is required");
    return false;
  }

  if (isNaN(parseFloat(data.fromValue))) {
    alert('Invalid "From" value');
    return false;
  }

  if (isNaN(parseFloat(data.toValue))) {
    alert('Invalid "To" value');
    return false;
  }

  if (parseFloat(data.toValue) <= 0) {
    alert('"To" value must be positive');
    return false;
  }

  return true;
}

function base64ToFile(base64: string): File {
  const arr = base64.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/)!;
  const mime = mimeMatch[1];
  const extensions = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
  };

  if (!(mime in extensions)) {
    throw new Error(
      `Unsupported image type. Allowed: ${Object.keys(extensions).join(", ")}`
    );
  }

  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);

  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  return new File([u8arr], `uploaded_image${extensions[mime]}`, { type: mime });
}
