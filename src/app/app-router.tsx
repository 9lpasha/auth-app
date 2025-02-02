import { Route, BrowserRouter as Router, Routes, useSearchParams } from "react-router-dom";

import { AuthPage, ProfilePage } from "pages";

const App = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get("route") === "profile" ? <ProfilePage /> : <AuthPage />;
};

export const AppRouter = () => {
  return (
    <Router basename={location.hostname === "localhost" ? "/" : "/auth-app"}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};
