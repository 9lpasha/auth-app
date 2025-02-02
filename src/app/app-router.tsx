import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthPage, ProfilePage } from "pages";

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
);
