import React from 'react';


interface ModuleDividerProps {
  className?: string;
}

const ModuleDivider: React.FC<ModuleDividerProps> = ({ }) => {
  return (
    <div className='container'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="70" viewBox="0 0 600 70" preserveAspectRatio="xMidYMid meet">
        <g>

          <circle cx="40" cy="40" r="14" fill="#154262" opacity="0.9" />
          <circle cx="150" cy="35" r="18" fill="#8DCDDE" opacity="0.8" />
          <circle cx="280" cy="45" r="20" fill="#154262" opacity="0.85" />
          <circle cx="410" cy="38" r="16" fill="#8DCDDE" opacity="0.8" />
          <circle cx="540" cy="42" r="14" fill="#154262" opacity="0.9" />


          <circle cx="90" cy="25" r="10" fill="#E91E63" opacity="0.4" />
          <circle cx="200" cy="50" r="9" fill="#154262" opacity="0.8" />
          <circle cx="340" cy="30" r="10" fill="#8DCDDE" opacity="0.7" />
          <circle cx="470" cy="50" r="9" fill="#E91E63" opacity="0.4" />


          <circle cx="70" cy="18" r="4" fill="#8DCDDE" opacity="0.7" />
          <circle cx="130" cy="55" r="3" fill="#154262" opacity="0.8" />
          <circle cx="240" cy="20" r="5" fill="#E91E63" opacity="0.5" />
          <circle cx="300" cy="60" r="4" fill="#154262" opacity="0.8" />
          <circle cx="380" cy="18" r="5" fill="#8DCDDE" opacity="0.6" />
          <circle cx="510" cy="58" r="4" fill="#E91E63" opacity="0.4" />
        </g>
      </svg>

    </div>
  );
};

export default ModuleDivider; 