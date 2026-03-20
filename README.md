# Tonky Todo

Tonky Todo is a simple web application for managing tasks and to-do lists. It allows users to create tasks, mark tasks as complete, and delete tasks.

## Features

- Create tasks
- Mark tasks as complete
- Delete tasks

## Technologies Used

- **Frontend**: Vanilla JS, HTML, CSS
- **Backend**: FastAPI (Python 3.11), SQLite, SQLAlchemy

## Getting Started

### Prerequisites

- Python 3.11
- Node.js (for development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tonky-todo.git
cd tonky-todo
```

2. Set up the backend:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

3. Set up the frontend:

```bash
npm install
```

### Running the Application

1. Start the backend server:

```bash
uvicorn main:app --reload
```

2. Start the frontend development server:

```bash
npm run dev
```

The application should now be running on `http://localhost:3000`.

## Project Structure

```
tonky-todo/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── database.py
│   ├── requirements.txt
│   └── main.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── styles.css
│   ├── src/
│   │   ├── app.js
│   │   └── api.js
│   └── package.json
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)