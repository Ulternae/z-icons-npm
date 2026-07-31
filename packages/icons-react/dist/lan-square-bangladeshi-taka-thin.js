import React from 'react';

export const LanSquareBangladeshiTakaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120.1 38.7c.7-4.4 4.8-7.3 9.2-6.6l17.4 2.9c21.5 3.6 37.2 22.2 37.2 44v41h32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v107.4c0 15.8 12.8 28.6 28.6 28.6h3.4c57.4 0 104-46.6 104-104v-3.4c0-15.8-12.8-28.6-28.6-28.6H280c-4.4 0-8-3.6-8-8s3.6-8 8-8h11.4c24.6 0 44.6 20 44.6 44.6v3.4c0 66.3-53.7 120-120 120h-3.4c-24.6 0-44.6-20-44.6-44.6V232h-45.7c-4.4 0-8-3.6-8-8s3.6-8 8-8H168v-41c0-14-10.1-25.9-23.9-28.2l-17.4-2.9c-4.4-.7-7.3-4.8-6.6-9.2"})
);

export default LanSquareBangladeshiTakaThin;
