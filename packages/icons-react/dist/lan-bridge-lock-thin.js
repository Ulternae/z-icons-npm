import React from 'react';

export const LanBridgeLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v96H8c-4.4 0-8 3.6-8 8v104c0 3.3 2.1 6.3 5.2 7.5l12.1 4.5C45.4 278.6 64 305.4 64 335.4V456c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-88c0-44.2 35.8-80 80-80 32.5 0 60.5 19.4 73 47.3 2.2-2.4 4.5-4.7 7-6.9V315c-17.2-25.9-46.6-42.9-80-42.9-53 0-96 43-96 96v88c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V335.5c0-36.7-22.8-69.5-57.1-82.4l-6.9-2.6V160h480v20c5.5 1.4 10.8 3.2 16 5.3V152c0-4.4-3.6-8-8-8h-48V48h48c4.4 0 8-3.6 8-8s-3.6-8-8-8zm432 16v96H328V48zm-128 0v96H200V48zm-128 0v96H72V48zm328 240.1V352h-96v-63.9c0-26.5 21.5-48 48-48s48 21.5 48 48M368 400c0-17.7 14.3-32 32-32v.1h128v-.1c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H400c-17.7 0-32-14.3-32-32zm160-111.9c0-35.3-28.7-64-64-64s-64 28.7-64 64V352c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48z"})
);

export default LanBridgeLockThin;
