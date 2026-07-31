import React from 'react';

export const LanTowerControlRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v48h176c7.4 0 14.4 3.4 19 9.3s6.1 13.5 4.3 20.7L397 320h3.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v144h-48V368h-224v144h-48V368h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h3.1L.9 126c-1.9-7.2-.3-14.8 4.3-20.7S16.6 96 24 96h176V48h-32c-13.3 0-24-10.7-24-24m203.4 296L393 144h-73v176zm-75.4 0V144h-96v176zm-144 0V144H55l45.6 176z"})
);

export default LanTowerControlRegular;
