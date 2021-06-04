import React, { useState, useEffect } from 'react';
import AddTask from './addTask';
import axios from 'axios';

const Admin = () => {
  return (
    <div>
      <h1>Nachalo</h1>
      <AddTask />
    </div>
  );
};

export default Admin;
