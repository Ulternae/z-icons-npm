import React from 'react';

export const LanShieldUserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M231.1 7.9c16-6.8 34-6.8 50 0l176.7 74.9 4 1.9c18.6 9.5 32.4 28 34.1 50.4l.2 4.8-.6 19.5c-5.5 102-51.5 266.4-213 343.7l-5.6 2.3c-11.3 4.1-23.5 4.7-35.1 2l-5.7-1.7-6.4-2.6C68.1 425.9 22.2 261.5 16.6 159.5L16 140c-.1-24.6 14.3-45.2 34.2-55.3l4.1-1.9L231 7.9zm43.7 14.7c-10.5-4.4-22.1-5-32.9-1.7l-4.6 1.7L60.5 97.5C44 104.6 31.9 120.8 32 139.9l.6 19c5.4 98.9 50 255.9 203.6 329.6l5.5 2.2c11 3.7 23.2 3 33.9-2l15-7.7c151.6-81.7 189-247.4 189.5-341.1l-.1-3.7-.8-6c-2.9-13.7-12.3-25.1-24.6-31.3l-3-1.4-176.7-74.9zM296 272c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72zm-40-32a64 64 0 1 1 0-128 64 64 0 1 1 0 128m0-112a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default LanShieldUserThin;
