import React, { createContext, useState, ReactNode, useContext } from "react";

type ViewType = "grid" | "list";

interface ViewContextType {
  view: ViewType;
  // setView: (view: ViewType) => void;
  toggleView: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('grid');

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");

  }
  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  )

}


export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}
