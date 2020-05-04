import React from 'react';

import GatsbyLogo from '../../assets/images/gatsby-logo.png';

export default function GatsbyButton () {
  return (
    <div>
      <form>
        <img src={GatsbyLogo} alt="gatsby js" style={{ width: '11%', margin: '.5% 0' }}/>
      </form>
    </div>
  );
}