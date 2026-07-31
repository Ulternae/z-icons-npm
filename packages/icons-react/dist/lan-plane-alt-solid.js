import React from 'react';

export const LanPlaneAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M520 200c30.9 0 56 25.1 56 56s-25.1 56-56 56H392.7l-66.5 72.6c14.7 2.9 25.9 15.8 25.9 31.4 0 17.7-14.3 32-32 32h-52l-34.5 37.6C227.5 492.2 219 496 210 496h-43.7c-10.9 0-18.6-10.7-15.2-21.1L205.4 312h-99.7l-52.8 66c-3 3.8-7.6 6-12.5 6H20.6c-10.4 0-18-9.8-15.5-19.9L32 256 5 147.9C2.4 137.8 10.1 128 20.5 128h19.8c4.9 0 9.5 2.2 12.5 6l52.8 66h99.7L151 37.1c-3.4-10.4 4.3-21.1 15.2-21.1h43.7c9 0 17.5 3.8 23.6 10.4L268 64h52c17.7 0 32 14.3 32 32 0 15.6-11.1 28.6-25.9 31.4l66.6 72.6z"})
);

export default LanPlaneAltSolid;
