import React from 'react';

export const LanGlassesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120.3 48c-25 0-47 16.6-53.8 40.6l-48.3 169c-.2.6-.3 1.2-.5 1.8 4.3-2.2 9.2-3.4 14.3-3.4h192c17.7 0 32 14.3 32 32v8h64v-8c0-17.7 14.3-32 32-32h192c5.2 0 10 1.2 14.3 3.4-.2-.6-.3-1.2-.5-1.8l-48.3-169c-6.9-24-28.8-40.6-53.8-40.6H424c-4.4 0-8-3.6-8-8s3.6-8 8-8h31.7c32.1 0 60.4 21.3 69.2 52.2l48.3 169c1.8 6.4 2.8 13.1 2.8 19.8v111c0 53-43 96-96 96h-64c-53 0-96-43-96-96v-72h-64v72c0 53-43 96-96 96H96c-53 0-96-43-96-96V273c0-6.7.9-13.3 2.8-19.8L51 84.2C59.9 53.3 88.1 32 120.3 32H152c4.4 0 8 3.6 8 8s-3.6 8-8 8zM560 288c0-8.8-7.2-16-16-16H352c-8.8 0-16 7.2-16 16v96c0 44.2 35.8 80 80 80h64c44.2 0 80-35.8 80-80zm-320 16v-16c0-8.8-7.2-16-16-16H32c-8.8 0-16 7.2-16 16v96c0 44.2 35.8 80 80 80h64c44.2 0 80-35.8 80-80z"})
);

export default LanGlassesThin;
