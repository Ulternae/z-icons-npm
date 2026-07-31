import React from 'react';

export const LanCloudDrizzleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c53 0 96 43 96 96s-43 96-96 96zm-32 48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m192 0c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m192 0c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m-288 48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m192 0c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24"})
);

export default LanCloudDrizzleSolid;
