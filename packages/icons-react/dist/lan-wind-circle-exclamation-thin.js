import React from 'react';

export const LanWindCircleExclamationThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c118.3 0 215.2 91.8 223.4 208h-16C455.2 132.6 365.5 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208c80.2 0 149.9-45.4 184.6-112h17.9c-36 75.7-113.1 128-202.4 128-123.7 0-224-100.3-224-224S132.3 32 256 32m272 256c44.2 0 80 35.8 80 80s-35.8 80-80 80h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40c35.3 0 64-28.7 64-64s-28.7-64-64-64H392c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-272 96a16 16 0 1 1 0-32 16 16 0 1 1 0 32m2.9-255.7c6.6 1.4 11.5 7.4 11.2 14.4L264 304.3c-.2 4.3-3.7 7.7-8 7.7s-7.8-3.4-8-7.7l-6.2-161.6c-.3-8 6.1-14.7 14.2-14.7zM560 64c44.2 0 80 35.8 80 80s-35.8 80-80 80h-33.8c-.6-5.4-1.4-10.7-2.4-16H560c35.3 0 64-28.7 64-64s-28.7-64-64-64h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanWindCircleExclamationThin;
