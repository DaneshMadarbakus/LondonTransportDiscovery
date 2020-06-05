import React from 'react';
// import './styles.css';

// export const BoldBox = ({children}) => <Box border="3px solid black">
// {children}
// </Box>

export const Box = ({ children, border = "1px solid black" }) => <div
  style={{ 
    border 
  }}>{children}</div>