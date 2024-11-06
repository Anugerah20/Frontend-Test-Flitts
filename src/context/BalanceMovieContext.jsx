import { createContext, useContext, useState } from "react";

const BalanceMovieContext = createContext();

export const useBalanceMovie = () => useContext(BalanceMovieContext);

export const BalanceMovieProvider = ({ children }) => {
     // Balance Movie default value is 100000
     const [balanceMovie, setBalanceMovie] = useState(100000);

     const deductBalanceMovie = (amount) => {
          // Deduct balance movie
          setBalanceMovie((prev) => (prev >= amount ? prev - amount : prev));
     };

     return (
          <BalanceMovieContext.Provider value={{ balanceMovie, deductBalanceMovie }}>
               {children}
          </BalanceMovieContext.Provider>
     );
};
