export interface PromotionConfig {
  active: boolean;
  name: string;
  announcement: string;
  headline: string;
  subheadline: string;
  code: string;
  url: string;
  discountLabel: string;
}

// Centralized promotional configuration.
// Defaults to inactive. To activate a campaign, set active: true and populate campaign fields.
// Example (Do not leave active):
// active: true,
// name: "Rakhi Sale",
// announcement: "RAKHI SALE · ₹1100 OFF · SHOP NOW →",
// headline: "RAKHI EDIT",
// subheadline: "SPECIAL FESTIVE PRICING",
// code: "RAKHI1100",
// url: "/sale",
// discountLabel: "SPECIAL OFFERS",

export const promotion: PromotionConfig = {
  active: false,
  name: "",
  announcement: "",
  headline: "",
  subheadline: "",
  code: "",
  url: "/sale",
  discountLabel: "",
};
