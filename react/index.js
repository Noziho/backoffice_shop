import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { UserAccount } from "./pages/UserAccount/UserAccount";
import { Promotions } from "./pages/promotions/Promotions";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-account" element={<UserAccount />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
