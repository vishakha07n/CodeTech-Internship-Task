
# Library Management RESTful API

This project is a simple RESTful API built using Python Flask and MySQL, designed to manage a collection of books. It supports full CRUD operations and communicates using JSON. The API is tested using Postman.

# Technologies Used

- Python (Flask)
- Flask SQLAlchemy
- MySQL
- Postman
- VS Code
- pip (for package management)


## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd LibraryAPI
````

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Create the MySQL Database

```sql
CREATE DATABASE librarydb;
```

> Ensure your `config.py` file has the correct MySQL credentials and database name.

### 4. Run the Application

```bash
python app.py
```
The server will start at: [http://127.0.0.1:5000](http://127.0.0.1:5000)


##  Database Schema

**Database Name:** `librarydb`
**Table:** `books`

| Field  | Type    | Description        |
| ------ | ------- | ------------------ |
| id     | Integer | Primary Key        |
| title  | String  | Book Title         |
| author | String  | Author Name        |
| year   | Integer | Year of Publishing |


## API Endpoints

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| POST   | `/books`      | Add a new book        |
| GET    | `/books`      | Retrieve all books    |
| GET    | `/books/<id>` | Retrieve a book by ID |
| PUT    | `/books/<id>` | Update a book by ID   |
| DELETE | `/books/<id>` | Delete a book by ID   |

---

##  Sample JSON Requests & Responses

### 🔹 Create a Book (POST `/books`)

**Request:**

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

**Response:**

```json
{
  "id": 1,
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

---

### 🔹 Get All Books (GET `/books`)

**Response:**

```json
[
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "year": 1988
  },
  {
    "id": 2,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "year": 2008
  }
]
```

---

### 🔹 Get Book by ID (GET `/books/1`)

**Response:**

```json
{
  "id": 1,
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

---

### 🔹 Update Book (PUT `/books/1`)

**Request:**

```json
{
  "title": "The Alchemist - Revised",
  "author": "Paulo Coelho",
  "year": 1989
}
```

**Response:**

```json
{
  "id": 1,
  "title": "The Alchemist - Revised",
  "author": "Paulo Coelho",
  "year": 1989
}
```

---

### 🔹 Delete Book (DELETE `/books/1`)

**Response:**

```json
{
  "message": "Book deleted successfully"
}
```

---

##  Postman Collection (Optional)

A Postman collection file can be exported if needed. It includes all 5 CRUD endpoints.
(https://web.postman.co/workspace/6987a425-a248-41d4-8a13-97b28b1e45b2/collection/46881298-6fbd19b2-2ac3-4176-bc60-7b2a961659f4?action=share&source=copy-link&creator=46881298)
---

##  Project Structure

```
LibraryAPI/
│
├── app.py              # Main Flask app
├── config.py           # MySQL database config
├── models.py           # SQLAlchemy Book model
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation
```

##  Author
Vishakha Nale – MCA Student
Built as part of internship project for backend API development.

