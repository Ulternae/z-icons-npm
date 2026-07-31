import React from 'react';

export const LanMugSaucerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M408 48h24v240c0 44.2-35.8 80-80 80H160c-44.2 0-80-35.8-80-80V64c0-8.8 7.2-16 16-16zm40 176V48h24c48.6 0 88 39.4 88 88s-39.4 88-88 88zm0 64v-48h24c57.4 0 104-46.6 104-104S529.4 32 472 32H96c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96M40 464c-4.4 0-8 3.6-8 8s3.6 8 8 8h440c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanMugSaucerThin;
