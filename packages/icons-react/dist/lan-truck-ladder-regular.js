import React from 'react';

export const LanTruckLadderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h8v64h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V80h8c13.3 0 24-10.7 24-24s-10.7-24-24-24zm248 48v64h-32V80zm-80 0v64h-32V80zm-80 0v64H80V80zM80 288h480v64c0 8.8-7.2 16-16 16h-3.3c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H268.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H80zm304-48H80c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h19.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64v-95.4c0-11.4-3-22.1-8.1-31.1l-53.7-96.6C535 108.6 513.6 96 490.3 96H416c-17.7 0-32 14.3-32 32zm48 0v-96h58.3c5.8 0 11.2 3.2 14 8.2l48.8 87.8zM144 392a40 40 0 1 1 80 0 40 40 0 1 1-80 0m312-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanTruckLadderRegular;
