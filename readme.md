# 🔐 JavaScript Password Generator

This is a simple and interactive password generator built using **HTML, CSS, and JavaScript**.  
This project demonstrates the use of **DOM manipulation, conditional logic, operators, and event handling** in JavaScript.

---

## 🚀 Features

- Generate secure passwords based on user preferences
- Choose password length
- Include or exclude:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Real-time error handling and validation
- Interactive UI feedback using DOM manipulation

---

## 🧠 Key JavaScript Concepts Used

This project was built to strengthen core JavaScript fundamentals:

### ✔ Conditionals
- Used `if`, `else if`, and logical conditions to validate user input
- Ensured at least one character type is selected before generating a password

### ✔ Operators
- Logical operators (`&&`, `||`, `!`) used for validation
- Ternary operators used for setting boolean states
- Arithmetic operators used for random index generation

### ✔ DOM Manipulation
- `document.querySelector()` used to access elements
- Dynamic updates using `.textContent` and `.style.display`
- Event listeners for user interaction (`click` events)

---

## ⚙️ How It Works

1. User selects password length and character options
2. JavaScript checks selected options using conditionals
3. A character pool is created based on user selection
4. A loop generates a random password from the pool
5. The generated password is displayed on the screen
6. Error messages appear if inputs are invalid
