import React from 'react';
import { Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginPage = () => {
  const handleClick = () => {
    console.log('click');
    return <Redirect to="/login" />;
  };
  return (
    <div>
      <p>Login to spotify</p>
      <Button size="large" style={{ margin: 50 }} onClick={handleClick}>
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
};

export default connect()(LoginPage);
