// Set price movie
export const getPriceMovie = (rating) => {
     if (rating < 3) return 3500;
     if (rating < 6) return 8250;
     if (rating < 8) return 16350;
     return 21250;
};
