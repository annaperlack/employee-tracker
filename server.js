const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Hello89!',
      database: 'employees_db'
    },
  );

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});