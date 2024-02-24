import React from 'react';
import { useBearStore } from '../zustand';

const Main = () => {
  const bears = useBearStore((state) => state.bears)
  return <div>Main Page {bears}</div>;
};

export default Main;