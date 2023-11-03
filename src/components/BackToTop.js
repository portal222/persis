import React, { useEffect, useState } from 'react';
import { UpCircleTwoTone } from '@ant-design/icons';

import { Space } from 'antd';


export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);
  const handleScrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {visible && (
        <span>
          <div onClick={handleScrollOnTop}
           className='back-to-top'>
              <Space >    
            <UpCircleTwoTone twoToneColor="#d9d9d9"/>
            </Space>
          
          </div>
        </span>
      )}
    </div>
  );
}
