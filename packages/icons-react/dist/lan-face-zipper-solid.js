import React from 'react';

export const LanFaceZipperSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 520.575',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M527.3 347.3c10.8-28.4 16.8-59.2 16.8-91.3 0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c32.2 0 63-5.9 91.3-16.8l-6.7-6.7C346 461.8 342.1 421 361 390.2c-2.8 1.1-5.8 1.7-9 1.7-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24s24 10.7 24 24v32c0 1.6-.1 3.1-.4 4.5l31.9-31.9c31.2-31.2 81.9-31.2 113.1 0l6.7 6.7zM176.1 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-96 136c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-13.3 10.7-24 24-24m-80 0c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-13.3 10.7-24 24-24m344 112-49.4-49.4c-12.5-12.5-32.8-12.5-45.3 0l-34.7 34.7c-12.5 12.5-12.5 32.8 0 45.3l49.4 49.4c22.1 22.1 57.9 22.1 80 0s22.1-57.9 0-80m-56 40a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanFaceZipperSolid;
