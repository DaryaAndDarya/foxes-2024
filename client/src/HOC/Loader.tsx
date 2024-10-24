import React from 'react';

type LoaderProps = {
  children: React.ReactElement;
  isLoading: boolean;
};
export default function Loader({ children, isLoading }: LoaderProps): React.ReactNode {
  return isLoading ? <h1>Загрузка...</h1> : children;
}
