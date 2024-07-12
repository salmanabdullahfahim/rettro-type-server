# Rettro Type, A Mechanical Keyboard Shop - Backend

This is the backend for the Mechanical Keyboard Shop e-commerce website, built using Node.js, Express, MongoDB, Mongoose, and Zod. The backend provides APIs for managing products, processing orders.

## Live Deployment Link

- [https://rettro-type-server.vercel.app/]

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/salmanabdullahfahim/rettro-type-server.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables. Create a `.env` file in the root directory and add the following:
   ```env
   database_url=your_mongodb_uri
   PORT=5000
   NODE_ENV='development'
   ```

## Configuration

- **MongoDB URI**: Set `MONGO_URI` to your MongoDB connection string.
- **Port**: Set `PORT` to the port number you want the server to run on.

## Usage

1. Start the server:

   ```bash
   npm run start:dev
   ```

2. The server will run on the port specified in the `.env` file (default is `5000`).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod

## License

Copyright (c) [2024] [RettroType]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
