import React, { useState } from "react";
import {Button, message} from 'antd'
import './fileUpload.css'
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from "react-router";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [shortLink, setShortLink] = useState("");
  const MAX_FILE_SIZE = 1 * 1024 * 1024;
  const navigate = useNavigate();

  const allowedTypes = [
    'text/csv',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/html',
    'image/jpg',
    'image/jpeg',
    'application/pdf',
    'image/png',
    'text/plain',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (allowedTypes.includes(selectedFile.type)) {
        if (selectedFile.size <= MAX_FILE_SIZE) {
          setFile(selectedFile);
        } else {
          message.error('File size exceeds the allowed limit.');
          e.target.value = "";
        }
      } else {
        message.error('Invalid file type. Allowed types: CSV, DOCX, HTML, JPG, JPEG, PDF, PNG, TXT, PPT, PPTX, XLS, XLSX.');
        e.target.value = "";
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      message.error("Please select a file.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", storedUser.username);
    console.log(storedUser.username)

    try {
      const response = await fetch("https://api-service-ypyb.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        message.success("Successfully uploaded file onto S3")
        setShortLink(result.shortUrl);
      } else {
        message.error("Error uploading file.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} className="custom-file-upload"/>
      <Button type="primary" onClick={handleUpload}>Upload</Button>
      {shortLink && (
        <div className="link">
          <h3>
            Short Link: <a href={shortLink}>{shortLink}</a>
          </h3>
        </div>
      )}
      <div className="all-files-btn">
        <Button type="primary" onClick={() => navigate('/fileDisplay')}>Display All Files</Button>
      </div>
    </div>
  );
}

export default FileUpload;