import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeToggle } from "components";
import { Toaster } from "components-shadcn";

import { AppRouter } from "./app-router";

const queryClient = new QueryClient();

export const App = () => (
  <div className="bg-white dark:bg-black min-h-screen">
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>

    <Toaster />

    <div className="absolute top-4 right-4">
      <ThemeToggle />
    </div>
  </div>
);
