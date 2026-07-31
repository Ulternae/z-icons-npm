import React from 'react';

export const LanHeartRateSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M287.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 26.5-53.1c5.4-10.8 16.5-17.7 28.6-17.7h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-76.2l-55.2 110.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4l-61.4-225.1-68.4 319.4c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L103.9 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c14.3 0 26.8 9.5 30.8 23.2L187.6 348l69.1-322.7C259.8 10.9 272.4.4 287.1 0"})
);

export default LanHeartRateSolid;
