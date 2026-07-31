import React from 'react';

export const LanGameConsoleHandheldThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 16c-26.5 0-48 21.5-48 48v352c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm80 16v144c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V80zm-16 0c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v144c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm168 264a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m16-48a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-192-48c0-4.4 3.6-8 8-8s8 3.6 8 8v32h32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v32c0 4.4-3.6 8-8 8s-8-3.6-8-8v-32H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h32z"})
);

export default LanGameConsoleHandheldThin;
