import { BrowserRouter } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ReactQueryProvider } from './providers/ReactQueryProvider';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  );
}
