# User Registration - Documentation

## Overview

The **User Registration** feature allows new users to create an account in the system. The registration process includes verifying the email, securely hashing the password, and saving the user data in the database. This functionality supports multiple roles, including **Admin**, **Servitor**, and **User**. The system ensures that users can securely register and be assigned a role during the registration process.

## Functional Requirements

### 1. **Email Verification**
- The system must check if the provided **email** already exists in the database.
- If the email is already registered, an error message should be returned indicating that the email is already in use.

### 2. **Password Encryption**
- The password provided during registration must be encrypted using **bcrypt** before storing it in the database.
- The system will never store passwords in plain text.

### 3. **Role Assignment**
- Users will be assigned a role during registration. The roles include:
  - **Admin**: Full access to the system.
  - **Servitor**: Access to the tasks assigned to them.
  - **User**: Access to their personal data and services.


### 4. **Response**
- The system should return the **id**, **email**, and **role** of the newly registered user. The **password** is never returned.

---

## API Endpoint

### **POST /auth/register**

- **Description**: Registers a new user.
- **Method**: `POST`
- **Route**: `/auth/register`
- **Request Body**:

```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "user"
}