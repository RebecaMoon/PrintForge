import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">

      <aside className="sidebar">

        <div className="sidebar-brand">
          PrintForge
        </div>

        <nav className="sidebar-menu">

          <NavLink
            to="/quotations"
            className={({ isActive }) =>
              isActive
                ? "menu-item menu-item-active"
                : "menu-item"
            }
          >
            Cotizar
          </NavLink>

          <NavLink
            to="/salesorders"
            className={({ isActive }) =>
              isActive
                ? "menu-item menu-item-active"
                : "menu-item"
            }
          >
            Ventas y Pedidos
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive
                ? "menu-item menu-item-active"
                : "menu-item"
            }
          >
            Clientes
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive
                ? "menu-item menu-item-active"
                : "menu-item"
            }
          >
            Inventario
          </NavLink>
        </nav>

      </aside>

      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;
