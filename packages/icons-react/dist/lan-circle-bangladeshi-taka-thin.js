import React from 'react';

export const LanCircleBangladeshiTakaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152.1 134.7c-.7 4.4 2.2 8.5 6.6 9.2l17.4 2.9C189.9 149.1 200 161 200 175v41h-45.7c-4.4 0-8 3.6-8 8s3.6 8 8 8H200v107.4c0 24.6 20 44.6 44.6 44.6h3.4c66.3 0 120-53.7 120-120v-3.4c0-24.6-20-44.6-44.6-44.6H312c-4.4 0-8 3.6-8 8s3.6 8 8 8h11.4c15.8 0 28.6 12.8 28.6 28.6v3.4c0 57.4-46.6 104-104 104h-3.4c-15.8 0-28.6-12.8-28.6-28.6V232h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32v-41c0-21.8-15.8-40.4-37.2-44l-17.4-2.9c-4.4-.7-8.5 2.2-9.2 6.6z"})
);

export default LanCircleBangladeshiTakaThin;
