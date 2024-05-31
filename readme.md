# QR Code Generator

This is a simple Node.js application that generates a QR code for a given URL.

## Features

- Generate a QR code for any URL.
- Simple form to input URL.
- Displays the generated QR code.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- QRCode package for generating QR codes

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/depada/qrCodeGen.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qrCodeGen
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   node app.js
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Usage

1. Enter a URL in the input field.
2. Click the "Generate QR Code" button.
3. The generated QR code will be displayed on the page.

### Project Structure

- `app.js`: Main application file.
- `views/`: Directory containing EJS templates.
- `public/`: Directory containing static files (CSS).
- `package.json`: Project metadata and dependencies.

### License

This project is licensed under the MIT License.
