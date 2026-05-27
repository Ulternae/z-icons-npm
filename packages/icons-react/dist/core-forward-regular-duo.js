import React from 'react';

export const CoreForwardRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 139.2v233.5c42.8-38.9 85.6-77.8 128.4-116.8C181.6 217 138.8 178.1 96 139.1zm256 0v233.5c42.8-38.9 85.6-77.8 128.4-116.8-42.8-38.9-85.6-77.8-128.4-116.8z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M64 64H32v384h76.4l9.2-8.3 170.5-155V448h76.4l9.2-8.3 176-160c6.5-6.1 10.3-14.7 10.3-23.7s-3.8-17.6-10.5-23.7l-176-160-9.2-8.3h-76.4v163.3l-170.5-155-9.2-8.3H63.8zm160.4 192L96 372.8V139.2zm256 0L352 372.8V139.2z"})
);

export default CoreForwardRegular-duo;
