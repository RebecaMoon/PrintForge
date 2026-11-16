import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import QuotationsPage from "./pages/Quotationes/QuotationsPage"
import SalesOrdersPage from "./pages/SalesOrders/SalesOrdersPage";
import ClientPage from "./pages/Clients/ClientsPage";
import InventoryPage from "./pages/Inventory/InventoryPage";

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Navigate to="/quotations" replace />}
          />

          <Route
            path="/quotations"
            element={<QuotationsPage />}
          />

          <Route
            path="/salesorders"
            element={<SalesOrdersPage />}
          />

          <Route
            path="/clients"
            element={<ClientPage />}
          />

          <Route
            path="/inventory"
            element={<InventoryPage />}
          />

        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;