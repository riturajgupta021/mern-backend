
## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/portfoliobackend.git
    cd portfoliobackend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and port:
    ```env
    DATABASE = your_mongodb_connection_string
    PORT = 3000
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication Routes

- `GET /` - Home route
- `POST /register` - Register a new user
- `POST /login` - Login a user
- `GET /user` - Get user data (requires authentication)

### Contact Routes

- `POST /form/contact` - Submit a contact form

### Admin Routes

- `GET /admin/usersdata` - Get all users (requires admin role)
- `GET /admin/usersdata/:id` - Get user by ID (requires admin role)
- `PATCH /admin/usersdata/update/:id` - Update user by ID (requires admin role)
- `DELETE /admin/usersdata/delete/:id` - Delete user by ID (requires admin role)
- `DELETE /admin/usersdata/contacts/delete/:id` - Delete contact by ID (requires admin role)
- `GET /admin/contacts` - Get all contacts (requires admin role)

## Middleware

- [varificationMiddleware.js](http://_vscodecontentref_/18) - Verifies JWT token
- [adminmiddleware.js](http://_vscodecontentref_/19) - Checks if the user has admin role
- [validateMiddleware.js](http://_vscodecontentref_/20) - Validates request body using Zod schema

## Models

- [userSchema.js](http://_vscodecontentref_/21) - User model
- [contactSchema.js](http://_vscodecontentref_/22) - Contact model

## Controllers

- [authController.js](http://_vscodecontentref_/23) - Handles authentication
- [contactFormController.js](http://_vscodecontentref_/24) - Handles contact form submissions
- [getAllcontactsController.js](http://_vscodecontentref_/25) - Handles fetching all contacts
- [getallUseraController.js](http://_vscodecontentref_/26) - Handles fetching, updating, and deleting users

## License

This project is licensed under the MIT License.
