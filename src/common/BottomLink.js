// BottomLink.js(ABOUT US 깃허브 연동 컴포넌트)
import React from 'react';
import './BottomLink.css';

function BottomLink() {
  // HCI-GBB 깃허브 링크
  const githubLink = 'https://github.com/HCI-GBB';

  return (
    <div className="BottomLink">
            <a href={githubLink} className="bottomlinkitem" target="_blank" rel="noopener noreferrer">
                ABOUT US
            </a>
    </div>
  );
}

export default BottomLink;