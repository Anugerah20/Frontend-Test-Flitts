export const formatDate = (dateString) => {
     const date = new Date(dateString);
     const day = date.getDate();
     const month = date.toLocaleString('en-US', { month: 'long' });
     const year = date.getFullYear();
     return `${day} ${month} ${year}`;
};
