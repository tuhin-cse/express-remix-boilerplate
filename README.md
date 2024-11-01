# Express-Remix Boilerplate

This project is a boilerplate setup for developing a fully functional web application using Express as the backend and Remix as the frontend, supporting both SSR (Server-Side Rendering) and CSR (Client-Side Rendering) on the same port. This setup allows developers to build, run, and deploy applications efficiently, with Remix handling the front-end rendering and Express serving as the API layer.

## Project Structure

The project is organized into two main directories:

- **`app`**: Contains the Remix app. Here, developers can build a fully functional Remix application with SSR and CSR capabilities.
- **`server`**: Contains the Express API backend, including API routes, controllers, middlewares, and utilities.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/tuhin-cse/express-remix-boilerplate.git
   cd express-remix-boilerplate
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

### Development Mode

To start the application in development mode with hot-reloading:

```bash
yarn dev
```

### Building the Application

To build the Remix and Express applications:

```bash
yarn build
```

### Production Mode

To start the application in production mode:

```bash
yarn start
```

## Folder Structure

```
project-root
├── app                 # Remix frontend application
│   ├── routes          # Remix routes for SSR and CSR
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   └── root.tsx        # Root component for the application
├── server              # Express backend application
│   ├── controllers     # API controllers
│   ├── middlewares     # Middleware functions
│   ├── routes          # Express API routes
│   └── utils           # Utility functions
│   ├── app.js          # Integration of Remix into Express
│   └── tsconfig.json   # TypeScript configuration
└── package.json        # Project scripts and dependencies
└── tsconfig.json       # TypeScript configuration
└── .env                # Environment variables
└── nodemon.json        # Nodemon configuration
└── vite.config.ts      # Vite configuration
```

## Features

- Full SSR and CSR support with Remix
- RESTful API with Express
- Shared port for both frontend and backend
- TypeScript support
- Hot reloading in development mode
- Alias path configuration for better module imports

## License

This project is open-source under the MIT License.
