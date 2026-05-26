import React from 'react';

export const LanDesktopMedicalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 416h126.6l-13.3 80h-73.2c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-73.2l-13.3-80h126.6c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64m129.4 80 13.3-80h98.4l13.3 80H193.3zM232 152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h40c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24z"})
);

export default LanDesktopMedicalThin;
