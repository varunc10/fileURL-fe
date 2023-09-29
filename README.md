## Frontend App for file uploading and short url generation service

This web application provides an intuitive interface to interact with our backend service, allowing you to upload and manage files and manage them seamlessly.

## Table of Contents

  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Login](#login)
    - [Register](#register)
    - [FileUpload](#fileUpload)
    - [FileDisplay](#fileDisplay)
  - [Authentication](#authentication)
  - [Features](#features)
  - [Deployment](#deployment)


## Technologies Used

- React.js
- Ant Design for UI components
- Fetch API for handling HTTP requests

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your development machine.
Access to the backend service API. Make sure the backend service is up and running.

### Installation

To get started with this frontend application, follow these steps: git clone https://github.com/varunc10/fileURL-fe

Change to the project directory: cd file-short-url

Install the project dependencies: npm install


## Usage

### Login

To access the login page, navigate to /login. Here, you can log in with your existing account by providing your username and password. Upon successful login, you will be redirected to the file upload page.

### Register

To access the register page, navigate to /register. Here, you can create a new account by providing a unique username and a secure password. After registering, you can log in using your newly created account.

### FileUpload

The FileUpload page allows you to easily upload various types of files, including CSV, DOCX, HTML, images (JPG, JPEG, PNG), PDF, plain text (TXT), presentations (PPT, PPTX), and spreadsheets (XLS, XLSX). Follow these steps to use the FileUpload feature:

1. Click the "Choose File" button to select a file from your local device.

2. Ensure the selected file meets the following criteria:
   - File type is one of the allowed types.
   - File size does not exceed the maximum allowed size.

3. After selecting a valid file, click the "Upload" button to initiate the file upload process.

4. If the upload is successful, you will receive a short link to access the uploaded file.

### FileDisplay

The FileDisplay page provides a convenient way to manage and view all your uploaded files. Here's how you can use the FileDisplay feature:

1. Navigate to the FileDisplay page by clicking the "Display All Files" button on the FileUpload page.

2. On the FileDisplay page, you will see a table displaying your uploaded files. The table includes the following columns:
   - File Name: The name of the uploaded file.
   - File Type: The type of the uploaded file.
   - Short Link: A clickable short link to access the file.

3. You can perform the following actions for each file listed:
   - Click the "Download" link to download the file to your device.
   - Click the "Delete" button to delete the file from your storage. A confirmation prompt will appear before deletion.

4. The FileDisplay page provides a convenient overview of all your uploaded files, making it easy to access and manage them.

Authentication

This frontend app uses a secure authentication method, ensuring the privacy and security of your account. It communicates with the backend service for user authentication, and users can create new accounts or log in with existing ones.

## Features

File Upload: Easily upload files of various types, including CSV, DOCX, HTML, images (JPG, JPEG, PNG), PDF, plain text (TXT), presentations (PPT, PPTX), and spreadsheets (XLS, XLSX).
File Management: View a list of your uploaded files, including file names, types, and short links.
File Deletion: Delete files you no longer need with a simple click.

## Deployment

Hosted the frontend codebase on Vercel.
