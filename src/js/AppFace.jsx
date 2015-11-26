import React from 'react';
import Connector from './Connector.jsx';
import TestBoy from './TestBoy.jsx';

class AppFace extends React.Component {
  render() {
      return (
      <div>
        <Connector
          label="Welcome to Connector." />

        <TestBoy
          label="Welcome to TestBoy." />
      </div>
    );
  }
}

export default AppFace;
