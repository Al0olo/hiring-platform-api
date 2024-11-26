# Hiring System Backend API

A robust NestJS-based RESTful API for managing user registrations. Built with TypeScript, PostgreSQL, and modern development practices.

## Features

### Core Functionality
- RESTful API endpoints for user management
- PostgreSQL database integration
- Data validation and sanitization
- Swagger API documentation
- Error handling and logging
- Database migrations
- Input validation with class-validator
- API rate limiting

### Technical Features
- TypeORM for database management
- Repository pattern implementation
- Environment-based configuration
- Custom exception filters
- Request validation pipes
- API versioning
- CORS configuration
- Production-ready setup

## Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **API Documentation:** Swagger/OpenAPI
- **Validation:** class-validator & class-transformer
- **Testing:** Jest
- **API Testing:** SuperTest
- **Linting:** ESLint
- **Code Formatting:** Prettier

## Prerequisites

Before you begin, ensure you have:
- Node.js (version 18 or later)
- npm (version 8 or later)
- PostgreSQL (version 12 or later)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-registration-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
# Application
PORT=3001
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=users_db
```

4. Start the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3001`
Swagger documentation will be available at `http://localhost:3001/api`

## Project Structure

```
src/
├── config/
│   ├── database.config.ts
│   ├── swagger.config.ts
│   └── validation.config.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── migrations/
│   └── initial-migration.ts
├── app.module.ts
└── main.ts
```

## Available Scripts

```bash
# Development
npm run start           # Start application
npm run start:dev      # Start application in watch mode
npm run start:debug    # Start application in debug mode

# Production
npm run build          # Build application
npm run start:prod     # Start production application

# Database
npm run migration:generate  # Generate new migration
npm run migration:run      # Run migrations
npm run migration:revert   # Revert last migration

# Testing
npm run test          # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:cov     # Generate test coverage report

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | API port | 3001 |
| NODE_ENV | Environment | development |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_USERNAME | Database username | postgres |
| DB_PASSWORD | Database password | - |
| DB_NAME | Database name | users_db |

## API Documentation

### Users Endpoints

#### Get All Users
```http
GET /users
```

#### Create User
```http
POST /users
```
Request body:
```json
{
  "fullName": "string",
  "dateOfBirth": "string",
  "preferredLocation": "string",
  "programmingSkills": "string[]",
  "resumeSummary": "string"
}
```

#### Get User by ID
```http
GET /users/{id}
```

### API Validation Rules

- **fullName**: Required, max length 50 characters
- **dateOfBirth**: Required, valid date format
- **preferredLocation**: Required, must be one of predefined locations
- **programmingSkills**: Required, array of strings
- **resumeSummary**: Required, max length 250 characters

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fullName VARCHAR(50) NOT NULL,
  dateOfBirth DATE NOT NULL,
  preferredLocation VARCHAR(255) NOT NULL,
  programmingSkills TEXT[] NOT NULL,
  resumeSummary TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Error Handling

The API includes standardized error responses:

```json
{
  "statusCode": number,
  "message": string,
  "error": string,
  "timestamp": string,
  "path": string
}
```

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Run database migrations:
```bash
npm run migration:run
```

4. Start the production server:
```bash
npm run start:prod
```

## Security Features

- Helmet for HTTP headers security
- Rate limiting
- CORS configuration
- Input validation
- Query injection prevention
- Sanitized error responses

## Development Guidelines

### Code Style
- Follow NestJS best practices
- Use TypeScript decorators appropriately
- Implement proper error handling
- Write comprehensive tests
- Document all public methods
- Use dependency injection

## Troubleshooting

### Common Issues

1. Database Connection
```bash
# Check database connection
npm run typeorm query "SELECT NOW()"
```

2. Migration Issues
```bash
# Reset migrations
npm run migration:revert
npm run migration:run
```

3. Port Already in Use
```bash
# Find and kill process
lsof -i :3001
kill -9 PID
```

## Performance Optimization

- Database indexing
- Query optimization
- Response caching
- Rate limiting
- Connection pooling

## Monitoring

- Winston logger implementation
- Error tracking
- Performance monitoring
- Database query logging
- API endpoint metrics

## Acknowledgments

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)