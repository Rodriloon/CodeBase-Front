import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FieldDetailPage } from "./pages/FieldDetailPage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/field/:id" element={<FieldDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
