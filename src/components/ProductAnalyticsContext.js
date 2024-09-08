'use client'
import { createContext, useContext, useState } from 'react';

// Create the context
const ProductAnalyticsContext = createContext();

// Create a provider component
export const ProductAnalyticsProvider = ({ children }) => {
  const [metricFilter, setMetricFilter] = useState([]);

  return (
    <ProductAnalyticsContext.Provider value={{ metricFilter,setMetricFilter }}>
      {children}
    </ProductAnalyticsContext.Provider>
  );
};

// Custom hook to use the context
export const useProductAnalytics = () => useContext(ProductAnalyticsContext);
