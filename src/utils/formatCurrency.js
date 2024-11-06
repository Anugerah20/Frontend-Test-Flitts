// Format uang menggunakan Intl.NumberFormat untuk format Indonesia
export const formatCurrency = (amount) => {
     return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
     }).format(amount);
};
