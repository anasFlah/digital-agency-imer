# Digital Agency Backend API

A comprehensive Node.js/Express backend API for the Digital Agency React application, featuring user authentication, project management, contact handling, and more.

## 🚀 Features

- **User Authentication & Authorization**: JWT-based authentication with role-based access control
- **Project Management**: Full CRUD operations for portfolio projects
- **Service Management**: Digital agency services with pricing and features
- **Contact Management**: Lead generation and contact form handling
- **Newsletter System**: Email subscription management
- **File Upload**: Image and file handling with Cloudinary integration
- **Email System**: Automated email notifications and verifications
- **Security**: Rate limiting, input validation, XSS protection, and more

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express-validator
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Security**: Helmet, CORS, Rate Limiting
- **Testing**: Jest + Supertest

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── config/          # Configuration files
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── public/              # Static files and uploads
├── package.json         # Dependencies and scripts
├── env.example          # Environment variables template
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/digital-agency
   JWT_SECRET=your-super-secret-jwt-key
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the API**
   - Base URL: `http://localhost:5000`
   - Health Check: `http://localhost:5000/api/health`
   - API Documentation: Available at `/api/docs` (if implemented)

## 📚 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password
- `POST /api/auth/forgot-password` - Forgot password
- `PUT /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/verify-email/:token` - Verify email
- `POST /api/auth/logout` - User logout

### User Routes
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user (Admin/Owner)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Project Routes
- `GET /api/projects` - Get all published projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project (Authenticated)
- `PUT /api/projects/:id` - Update project (Owner/Admin)
- `DELETE /api/projects/:id` - Delete project (Owner/Admin)

### Service Routes
- `GET /api/services` - Get all active services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service (Admin)
- `PUT /api/services/:id` - Update service (Admin)
- `DELETE /api/services/:id` - Delete service (Admin)

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin)
- `GET /api/contact/:id` - Get contact by ID (Admin)
- `PUT /api/contact/:id` - Update contact (Admin)
- `DELETE /api/contact/:id` - Delete contact (Admin)

### Newsletter Routes
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers (Admin)

### Admin Routes
- `GET /api/admin/dashboard` - Admin dashboard data
- `GET /api/admin/analytics` - Analytics and statistics
- `GET /api/admin/users` - User management
- `GET /api/admin/projects` - Project management
- `GET /api/admin/contacts` - Contact management

## 🔐 Authentication & Authorization

### JWT Token
- Tokens are sent in the `Authorization` header as `Bearer <token>`
- Token expiration: 30 days (configurable)
- Automatic token refresh not implemented (planned feature)

### User Roles
- **user**: Basic user with limited access
- **moderator**: Can manage content and moderate submissions
- **admin**: Full access to all features and data

### Protected Routes
- Use `protect` middleware for authentication
- Use `authorize('admin', 'moderator')` for role-based access
- Use `isAdmin` or `isModerator` for specific role checks

## 🗄️ Database Models

### User Model
- Personal information (name, email, phone, company, position)
- Authentication (password, JWT tokens, email verification)
- Profile settings (avatar, bio, social links, preferences)
- Role-based access control

### Project Model
- Project details (title, description, content, category)
- Media (images, videos, attachments)
- Metadata (tags, technologies, tools, timeline)
- Status management (draft, published, archived)

### Service Model
- Service information (name, description, features, benefits)
- Pricing (packages, hourly rates, custom quotes)
- Process workflow and deliverables
- Portfolio integration

### Contact Model
- Contact information (name, email, company, message)
- Project requirements (budget, timeline, service type)
- Lead scoring and qualification
- Status tracking and assignment

### Newsletter Model
- Subscription management
- Email preferences and categories
- Engagement tracking (open rates, click rates)
- Bounce and spam handling

## 🛡️ Security Features

### Input Validation
- Express-validator for request validation
- Sanitization of user inputs
- XSS protection with xss-clean
- SQL injection prevention with mongo-sanitize

### Rate Limiting
- Authentication routes: 5 requests per 15 minutes
- General API: 100 requests per 15 minutes
- Configurable limits per route

### Security Headers
- Helmet.js for security headers
- CORS configuration
- Content Security Policy
- HPP (HTTP Parameter Pollution) protection

### File Upload Security
- File type validation
- File size limits
- Virus scanning (planned)
- Secure file storage with Cloudinary

## 📧 Email System

### Email Templates
- User registration verification
- Password reset
- Newsletter subscriptions
- Contact form notifications

### Email Providers
- Gmail SMTP (default)
- SendGrid (planned)
- AWS SES (planned)
- Custom SMTP servers

## 🚀 Deployment

### Environment Variables
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/digital-agency
JWT_SECRET=your-production-jwt-secret
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Production Considerations
- Use environment variables for sensitive data
- Enable HTTPS in production
- Set up proper logging and monitoring
- Configure database backups
- Set up CI/CD pipeline

### Deployment Platforms
- Heroku
- DigitalOcean
- AWS EC2
- Google Cloud Platform
- Vercel (with limitations)

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "User Model"
```

### Test Structure
- Unit tests for models and utilities
- Integration tests for API endpoints
- Mock data and fixtures
- Test database setup and teardown

## 📊 Monitoring & Logging

### Logging
- Morgan for HTTP request logging
- Custom error logging
- Request/response logging in development

### Health Checks
- Database connectivity
- External service status
- API response time monitoring

### Performance Monitoring
- Response time tracking
- Database query optimization
- Memory usage monitoring

## 🔧 Configuration

### Database Configuration
- MongoDB connection with Mongoose
- Connection pooling
- Error handling and reconnection
- Index optimization

### CORS Configuration
- Frontend URL whitelist
- Credential support
- Method and header restrictions

### File Upload Configuration
- Maximum file size limits
- Allowed file types
- Storage configuration (local/cloud)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the API documentation
- Review the error logs
- Contact the development team

---

**🎯 Backend API is ready for integration with the React frontend!**
