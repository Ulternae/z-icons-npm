import React from 'react';

export const LanToiletsPortableThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 16c-22.1 0-40 17.9-40 40v40h192V56c0-22.1-17.9-40-40-40zm152 96H16v336h192V328h-24c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h24zm-24 200h24v-80h-24c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8m40-256v448c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40H16v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V56C0 25.1 25.1 0 56 0h112c30.9 0 56 25.1 56 56m120-40c-22.1 0-40 17.9-40 40v40h192V56c0-22.1-17.9-40-40-40zm152 96H304v336h192V328h-24c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h24zm-24 200h24v-80h-24c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8m40-256v448c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40H304v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V56c0-30.9 25.1-56 56-56h112c30.9 0 56 25.1 56 56"})
);

export default LanToiletsPortableThin;
