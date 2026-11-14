# PrintForge

A desktop application for managing a 3D printing business. It provides tools for estimating product prices, tracking sales, managing product pricing, and monitoring inventory.

## General Architecture

The application follows a three-layer architecture:

``` mermaid
flowchart TD
    A["FRONTEND<br/>React + Vite + TypeScript<br/><small>Interface, components, and data presentation</small>"]
    B["BACKEND<br/>Tauri 2 + Rust<br/><small>Operations, commands, and access to local resources</small>"]
    C["DATABASE<br/>SQLite<br/><small>Settings, printers, materials, and quotes</small>"]

    A <-->|"Tauri IPC"| B
    B <-->|"Database access"| C
```

### Architecture Responsibilities

-   **Frontend --- React + Vite + TypeScript:** Handles the user
    interface, reusable components, and data presentation.
-   **Backend --- Tauri 2 + Rust:** Handles application commands, native
    operations, and access to local resources. The frontend communicates
    with the backend through Tauri's Inter-Process Communication (IPC).
-   **Database --- SQLite:** Stores application data locally, including
    settings, printers, materials, and quotes.

## Development Tools

The following tools are required to develop and build the application on
Windows 11.

  ------------------------------------------------------------------------
                            \# Tool                  Purpose
  ---------------------------- --------------------- ---------------------
                             1 **Node.js (LTS)**     Runs npm and the
                                                     React development
                                                     tools.

                             2 **Git**               Version control and
                                                     integration with
                                                     GitHub.

                             3 **Rust + Cargo**      Develops and builds
                                                     the Tauri backend.

                             4 **Microsoft C++ Build Provides the native
                               Tools**               compiler toolchain
                                                     required to build
                                                     Tauri and Rust on
                                                     Windows.

                             5 **WebView2 Runtime**  Displays the React
                                                     frontend inside the
                                                     desktop application.

                             6 **Visual Studio       Code editor used to
                               Code**                write and manage the
                                                     project.
  ------------------------------------------------------------------------

## Project Technology Stack

  Layer                         Technology
  ----------------------------- --------------------------------
  Frontend                      React, Vite, TypeScript
  Desktop framework / backend   Tauri 2, Rust
  Local database                SQLite
  Version control               Git, GitHub
  Development environment       Windows 11, Visual Studio Code

## Notes

-   React, Vite, and TypeScript will be set up when the Tauri project is
    created using the React + TypeScript template.
-   Node.js is used for frontend development tooling; it is not the
    application's backend.
-   SQLite stores data in a local database file. A separate database
    server is not required.
-   The end-user application will be packaged as a Windows desktop
    application.

## VS CODE Extensions

code --install-extension rust-lang.rust-analyzer

code --install-extension tauri-apps.tauri-vscode

code --install-extension dbaeumer.vscode-eslint

code --install-extension esbenp.prettier-vscode