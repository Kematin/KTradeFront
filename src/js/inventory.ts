import type { ICSGOItem, ICustomItem } from "./schemas/items";

const csgoTestItems: ICSGOItem[] = [
  {
    id: 1,
    name: "AK-47 | Asiimov",
    price: 125.99,
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57/360fx360f",
    quality: "Field-Tested",
    currency: "$", // USD -> $
    float_value: 0.2589135913859,
    pattern: 321,
    is_void: false,
  },
  {
    id: 2,
    name: "AWP | Dragon Lore",
    price: 2499.99,
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7OC7ZbRhJc-RHGaGztF6ueZhW2e2k0l2sW_WzN7_cS6SbgV1CsF3TOEI4EOwloGzNLzg5g3fiIpHxC78kGoXuTqeOjwH/360fx360f",
    quality: "Factory New",
    currency: "$", // USD -> $
    float_value: 0.01134501353,
    pattern: 123,
    is_void: false,
  },
  {
    id: 3,
    name: "★ Karambit | Fade",
    price: 899.5,
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLzn4_v8ydP0POvV6JsJPWsAm6Xyfo45-BrHniwzUh24jjVm4qgInnCOA4mDscmEeVcsBXtkN22P-yx5waNg5UFk3tAoG85FQ/360fx360f",
    quality: "Minimal Wear",
    currency: "€", // EUR -> €
    float_value: 0.0701385613895,
    pattern: 456,
    is_void: true,
  },
  {
    id: 5,
    name: "Desert Eagle | Blaze",
    price: 75.25,
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7vORbqhsLfWAMWuZxuZi_uI_TX6wxxkjsGXXnImsJ37COlUoWcByEOMOtxa5kdXmNu3htVPZjN1bjXKpkHLRfQU/360fx360f",
    quality: "Battle-Scarred",
    currency: "$", // USD -> $
    float_value: 0.789048902582495,
    pattern: 654,
    is_void: false,
  },
];

const customTestItems: ICustomItem[] = [
  {
    id: 101,
    name: "Golden Coin",
    price: 49.99,
    currency: "$", // Добавлено и заменено
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_XcwsWyCnCZ7FF94Mj561PiUgn4nanm9DBe4_28bJtgL-WdGiidwORzo_VgTBa1nA8ivzKXnrD0Lj7JKml8W9AnEPlf4xnuwd3hZr_q5VGPgtlMmX_42yJB630-suoCVfV3rPGC2QiUNeA6_9Bdc8-qCT6U/360fx360f",
  },
  {
    id: 102,
    name: "Platinum Badge",
    price: 99.5,
    currency: "$", // Добавлено и заменено
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_XcwsWyCnCZ7FF94Mj561PiUgn4nanm9DBe4_28bJtgL-WdGiidwORzo_VgTBa1nA8ivzKXnrD0Lj7JKml8W9AnEPlf4xnuwd3hZr_q5VGPgtlMmX_42yJB630-suoCVfV3rPGC2QiUNeA6_9Bdc8-qCT6U/360fx360f",
  },
  {
    id: 103,
    name: "Diamond Trophy",
    price: 199.0,
    currency: "$", // Добавлено и заменено
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_XcwsWyCnCZ7FF94Mj561PiUgn4nanm9DBe4_28bJtgL-WdGiidwORzo_VgTBa1nA8ivzKXnrD0Lj7JKml8W9AnEPlf4xnuwd3hZr_q5VGPgtlMmX_42yJB630-suoCVfV3rPGC2QiUNeA6_9Bdc8-qCT6U/360fx360f",
  },
  {
    id: 104,
    name: "VIP Pass",
    price: 29.99,
    currency: "$", // Добавлено и заменено
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_XcwsWyCnCZ7FF94Mj561PiUgn4nanm9DBe4_28bJtgL-WdGiidwORzo_VgTBa1nA8ivzKXnrD0Lj7JKml8W9AnEPlf4xnuwd3hZr_q5VGPgtlMmX_42yJB630-suoCVfV3rPGC2QiUNeA6_9Bdc8-qCT6U/360fx360f",
  },
  {
    id: 105,
    name: "Legendary Case",
    price: 149.99,
    currency: "$", // Добавлено и заменено
    image_url:
      "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_XcwsWyCnCZ7FF94Mj561PiUgn4nanm9DBe4_28bJtgL-WdGiidwORzo_VgTBa1nA8ivzKXnrD0Lj7JKml8W9AnEPlf4xnuwd3hZr_q5VGPgtlMmX_42yJB630-suoCVfV3rPGC2QiUNeA6_9Bdc8-qCT6U/360fx360f",
  },
];

export const items = [...customTestItems, ...csgoTestItems];
