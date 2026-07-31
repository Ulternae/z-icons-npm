import React from 'react';

export const LanVialRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M329 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L30.3 335.7C10.9 355.1.1 381.3.1 408.7c0 57 46.2 103.2 103.2 103.2 27.4 0 53.6-10.9 73-30.2L456 201.9l15 15.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L361 39zM178 256 344.1 89.9l78.1 78.1-88 88H178.1zm-48 48h156.1L142.3 447.8c-10.4 10.4-24.4 16.2-39 16.2-30.5 0-55.2-24.7-55.2-55.2 0-14.6 5.8-28.7 16.2-39l65.6-65.8z"})
);

export default LanVialRegular;
