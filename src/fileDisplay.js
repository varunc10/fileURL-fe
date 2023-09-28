import React, { useEffect, useState } from 'react';
import { Table, Space, Button, message, Popconfirm } from 'antd';
import { useAuth } from './auth/AuthContext';

const FileDisplay = () => {
  const [files, setFiles] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`https://api-service-ypyb.onrender.com/api/files/${storedUser.username}`);
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          console.error('Error fetching files:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [storedUser.username]);

  const handleDelete = async (record) => {
    try {
      const response = await fetch(`https://api-service-ypyb.onrender.com/api/files/${record._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFiles((prevFiles) => prevFiles.filter((file) => file._id !== record._id));
        message.success('File deleted successfully.');
      } else {
        message.error('Error deleting file.');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const columns = [
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
    },
    {
      title: 'File Type',
      dataIndex: 'fileType',
      key: 'fileType',
    },
    {
      title: 'Short Link',
      dataIndex: 'shortLink',
      key: 'shortLink',
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" href={record.shortLink} target="_blank" rel="noopener noreferrer">
            Download
          </Button>
          <Popconfirm
            title="Are you sure to delete this file?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Your Files</h2>
      <Table columns={columns} dataSource={files} rowKey="_id" />
    </div>
  );
};

export default FileDisplay;
