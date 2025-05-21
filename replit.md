# Cronono - Sports Timing Application

## Overview

This repository contains a full-stack web application for a sports timing service called "Cronono". The application provides professional timing services for sports events like races and cycling competitions. It uses a modern tech stack with React for the frontend, Express for the backend, and Drizzle for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture with:

1. **Frontend**: A React-based single-page application with a component-based structure using modern UI patterns
2. **Backend**: An Express.js server that handles API requests and serves the static frontend files in production
3. **Database**: Uses Drizzle ORM, configured for PostgreSQL but currently using an in-memory storage implementation for development
4. **Authentication**: Has a basic user schema but authentication is not fully implemented yet

### Key Design Decisions

- **Monorepo Structure**: The codebase uses a monorepo approach with client, server, and shared directories
- **Server-Side Rendering**: No SSR implemented, using client-side rendering only
- **API Design**: RESTful API with simple endpoints
- **UI Component Library**: Uses shadcn/ui components with a New York style and Tailwind CSS for styling
- **Form Validation**: Implemented with Zod for type safety and validation

## Key Components

### Frontend

1. **UI Components**: Extensive set of reusable components built using Radix UI primitives and styled with Tailwind CSS
2. **Page Structure**: Simple page structure with a main Home page containing multiple sections
3. **State Management**: Uses React Query for server state management
4. **Navigation**: Basic routing with Wouter

### Backend

1. **API Routes**: Simple Express.js routes with JSON responses
2. **Storage Abstraction**: Interface-based storage system with in-memory implementation
3. **Schema**: User schema defined in shared directory for use across frontend and backend
4. **Validation**: Zod schemas for validating input data

### Database

1. **ORM**: Drizzle ORM configured for PostgreSQL
2. **Schemas**: User schema defined with primary key, username and password fields
3. **Migrations**: Setup for schema migrations with drizzle-kit

## Data Flow

1. **API Requests**: Frontend components make requests to the backend API endpoints
2. **Data Validation**: Backend validates incoming data using Zod schemas
3. **Storage**: Data is currently stored in memory but designed to be easily switched to PostgreSQL
4. **Response Handling**: Backend responds with JSON data that is consumed by React Query on the frontend
5. **UI Updates**: Components re-render based on data changes via React's state management

## External Dependencies

### Frontend
- React and React DOM for UI
- Tailwind CSS for styling
- shadcn/ui component library based on Radix UI primitives
- React Hook Form with Zod for form handling and validation
- Wouter for routing
- React Query for data fetching and caching
- Framer Motion for animations

### Backend
- Express.js for API routes and server
- Zod for validation
- Drizzle ORM for database operations

### Development
- TypeScript for type safety
- Vite for frontend development and building
- ESBuild for server bundling
- Drizzle Kit for database migrations

## Deployment Strategy

The application is configured for deployment to Replit with:

1. **Build Process**: Uses Vite to build the frontend and ESBuild to bundle the server
2. **Production Mode**: Separate configuration for development and production environments
3. **Static Asset Serving**: Express serves the built frontend assets in production
4. **Database**: Ready to connect to PostgreSQL in production via environment variables

### Environment Configuration
- The application expects `DATABASE_URL` for connecting to PostgreSQL
- Development mode uses an in-memory database for simplicity

## Getting Started

To run the project:

1. Make sure PostgreSQL is provisioned and `DATABASE_URL` is set
2. Run `npm run dev` for development mode
3. Run `npm run build` followed by `npm run start` for production mode
4. Run `npm run db:push` to push schema changes to the database

## Current Status

The application has a functional UI with various sections for a sports timing service website. The backend has basic route structure but needs further implementation for full functionality. Database is configured but using in-memory storage for now.

## Next Steps

1. Implement full authentication system
2. Connect to PostgreSQL database instead of in-memory storage
3. Implement additional API endpoints for event management
4. Develop admin interface for managing events and results
5. Add user profiles and result tracking