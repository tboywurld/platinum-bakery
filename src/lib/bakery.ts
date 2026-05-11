export const BAKERY = {
  name: "Platinum Bakery",
  address: "Federal Housing Estate 33, Onitsha 430213, Anambra State, Nigeria",
  shortAddress: "Federal Housing Estate 33, Onitsha",
  phone: "+2348000000000", // placeholder — replace with real number
  whatsapp: "2348000000000",
};

export const whatsappLink = (msg = "Hi Platinum Bakery, I'd like to place an order.") =>
  `https://wa.me/${BAKERY.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${BAKERY.phone}`;
