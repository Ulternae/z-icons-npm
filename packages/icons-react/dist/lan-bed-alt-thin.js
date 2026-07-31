import React from 'react';

export const LanBedAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 88c0-22.1 17.9-40 40-40h336c22.1 0 40 17.9 40 40v56.8c-10.2-10.4-24.3-16.8-40-16.8H304c-20.4 0-38.2 10.9-48 27.1-9.8-16.3-27.6-27.1-48-27.1H88c-15.7 0-29.8 6.4-40 16.8zm0 96c0-22.1 17.9-40 40-40h120c22.1 0 40 17.9 40 40v40H72c-8.4 0-16.5 1.4-24 4.1zm-16 52.1C12.7 249 0 271 0 296v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h480v56c0 4.4 3.6 8 8 8s8-3.6 8-8V296c0-25-12.7-47-32-59.9V88c0-30.9-25.1-56-56-56H88c-30.9 0-56 25.1-56 56zM264 184c0-22.1 17.9-40 40-40h120c22.1 0 40 17.9 40 40v44.1c-7.5-2.7-15.6-4.1-24-4.1H264zm0 56h176c30.9 0 56 25.1 56 56v104H16V296c0-30.9 25.1-56 56-56z"})
);

export default LanBedAltThin;
