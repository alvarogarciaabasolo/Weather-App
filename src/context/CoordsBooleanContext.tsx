import { createContext, useState } from 'react';

export interface CoorsProps {
  isCoords: boolean;
  setIsCoords: React.Dispatch<React.SetStateAction<boolean>> |null;
}

export const CoordsBooleanContext = createContext<CoorsProps | null>(null);

export const CoordsBooleanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isCoords, setIsCoords] = useState(false);

  return (
    <CoordsBooleanContext.Provider value={{ isCoords, setIsCoords }}>
      {children}
    </CoordsBooleanContext.Provider>
  );
};
