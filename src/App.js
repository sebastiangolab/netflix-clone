import 'assets/styles/theme.css';
import 'assets/styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from 'views/Movies';
import Page404 from 'views/Page404/Page404';
import Users from 'views/Users/Users';

const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="*" element={<Page404 />} />
         <Route path="/" exact element={<Users />} />
         <Route path="/movies" exact element={<Movies />} />
      </Routes>
   </BrowserRouter>
);

export default App;
