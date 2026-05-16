import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./routes/__root";
import HomePage from "./routes/index";
import ProductPage from "./routes/product";
import DevelopersPage from "./routes/developers";
import UseCasesPage from "./routes/use-cases";
import WaitlistPage from "./routes/waitlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="*" element={<RootLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
