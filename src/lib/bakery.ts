export const BAKERY = {
  name: "Platinum Bakery",
  address: "Federal Housing Estate 33, Onitsha 430213, Anambra State, Nigeria",
  shortAddress: "Federal Housing Estate 33, Onitsha",
  phone: "+2347039123273",
  phoneDisplay: "+234 703 912 3273",
  whatsapp: "2347039123273",
  instagram: "platinum.bakery",
  instagramUrl: "https://instagram.com/platinum.bakery",
};

export const whatsappLink = (msg = "Hi Platinum Bakery, I'd like to place an order.") =>
  `https://wa.me/${BAKERY.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${BAKERY.phone}`;
