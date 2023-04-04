import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { UserAccount } from "./pages/UserAccount/UserAccount";
import { Promotions } from "./pages/promotions/Promotions";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-account" element={<UserAccount />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
    </BrowserRouter>
);
