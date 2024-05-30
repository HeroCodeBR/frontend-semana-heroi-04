import { BooksProvider } from './contexts/booksContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <BooksProvider>
      <AppRoutes />
    </BooksProvider>
  );
}

export default App;
