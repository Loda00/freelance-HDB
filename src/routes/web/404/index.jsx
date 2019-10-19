import React from 'react';

import NotFound from '../../../image/404.jpg'

const Page404 = () => (
  // <div className="main-content">
  <div className="content-404">
    <img
      src={NotFound}
      alt="sad"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  </div>
  // </div>
);

export default Page404;
