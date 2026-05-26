import React from 'react';

export const LanBookBibleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 56C0 25.1 25.1 0 56 0h352c22.1 0 40 17.9 40 40v336c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56zm56 360c-22.1 0-40 17.9-40 40s17.9 40 40 40h344v-80zm-40 .8C26.2 406.4 40.3 400 56 400h352c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56c-22.1 0-40 17.9-40 40zM224 80h32c13.3 0 24 10.7 24 24v40h40c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-40v88c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-88h-40c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h40v-40c0-13.3 10.7-24 24-24m-8 24v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h48c4.4 0 8 3.6 8 8v96c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8"})
);

export default LanBookBibleThin;
