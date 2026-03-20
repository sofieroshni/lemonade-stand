import Header from './components/Header';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <Header />
        {children}
        </Provider>
      </body>
    </html>
  );
}