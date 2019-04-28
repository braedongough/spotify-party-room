import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

const LoginPage = () => {
  return (
    <div>
      <p>Login to spotify</p>
      <Button size="large" style={{ margin: 50 }}>
        <a href="http://localhost:8888/login">Login</a>
      </Button>
    </div>
  );
};

export default connect()(LoginPage);
