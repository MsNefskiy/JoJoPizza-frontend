import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

import App from './App';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullProduct from './components/FullProduct/FullProduct';
import AboutUs from './pages/AboutUs';
import { Nav } from './core/constants/navigation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Nav.HOME} element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path={Nav.CART} element={<Cart />} />
      <Route path={Nav.ABOUTUS} element={<AboutUs />} />
      <Route path="/product/:id" element={<FullProduct />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
