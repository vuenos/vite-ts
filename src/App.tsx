import { Routes, Route } from "react-router-dom";
import { Home, Login, Product, Myapp, NotFound } from "./pages";
import Layout from "./Layout";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="product" element={<Product />} />
          <Route path="myapp" element={<Myapp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

