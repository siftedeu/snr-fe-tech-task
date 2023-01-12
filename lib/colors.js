const customColors = {
  cerise: "#dc085c",
  consumer: "#f687b3",
  sustainability: "#51c97f",
  siftedPurple: "#b93e80",
  "creative-and-education": "#f687b3",
  "corporate-innovation": "#fc8181",
  services: "#b5bbc3",
  "public-and-academic": "#f4d627",
  fintech: "#328495",
  "venture-capital": "#9e32b8",
  mobility: "#90cdf4",
  "startup-life": "#f6ad55",
  deeptech: "#b794f4",
  healthtech: "#2888d1",
  "dark-blue": "#020231",
  "latest-news": "#dc085c",
  "corporate-innovation2": "#dc085c",
  services2: "#edab75",
  fintech2: "#74e0d8",
  "public-and-academic2": "#8ad47d",
  mobility2: "#4fadff",
  "startup-life2": "#4353ff",
  deeptech2: "#6a23db",
  "venture-capital2": "#2c2664",
  "future-proof": "#EF6063",
  other: "#cbd5e0",
  darkGray: "#3A3A51",
  lightGray: "#979797",
  pillGray: "#efefef",
  black: "#000",
};

const isValidSectorColor = (slug) => {
  return Object.keys(customColors).includes(slug);
};

module.exports = {
  customColors,
  isValidSectorColor,
};
