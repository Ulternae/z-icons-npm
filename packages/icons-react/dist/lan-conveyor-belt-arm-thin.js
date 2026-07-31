import React from 'react';

export const LanConveyorBeltArmThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M104 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v120c0 2.1.8 4.2 2.3 5.7s3.5 2.3 5.7 2.3h248v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-64c0-2.1-.8-4.2-2.3-5.7s-3.5-2.3-5.7-2.3H232V16h112c4.4 0 8-3.6 8-8s-3.6-8-8-8zm80 272c4.4 0 8 3.6 8 8v40h-80v-40c0-4.4 3.6-8 8-8zm-88 8v40c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96h-16v-40c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v40h-48v-40c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v40h-48v-40c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24m416 56h32c44.2 0 80 35.8 80 80s-35.8 80-80 80H96c-44.2 0-80-35.8-80-80s35.8-80 80-80zm0-56v40h-80v-40c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8m-240 40v-40c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v40zm-160 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanConveyorBeltArmThin;
