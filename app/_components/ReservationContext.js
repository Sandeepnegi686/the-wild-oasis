"use client";
const { createContext, useContext, useState } = require("react");

const ReservationContext = createContext();

const initialRange = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialRange);
  function clearRange() {
    setRange(initialRange);
  }
  return (
    <ReservationContext.Provider value={{ range, setRange, clearRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context is used out of the box.");
  }
  return context;
}

export { ReservationProvider, useReservationContext };
