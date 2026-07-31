import React from 'react';

export const LanFontCaseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 168v104h128V168c0-30.9-25.1-56-56-56h-16c-30.9 0-56 25.1-56 56m0 152v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-57.4 46.6-104 104-104h16c57.4 0 104 46.6 104 104v256c0 13.3-10.7 24-24 24s-24-10.7-24-24V320zm344-80c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h16c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56zm73-31c3-9.8 12.1-17 23-17 13.3 0 24 10.7 24 24v118.5c0 24.9 4 49.7 11.9 73.4l2.9 8.6c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2l-2.9-8.6c-.2-.6-.4-1.2-.6-1.9-18.5 16.7-42.9 26.9-69.8 26.9h-16c-57.4 0-104-46.6-104-104v-48c0-57.4 46.6-104 104-104h16c21.1 0 40.7 6.3 57 17z"})
);

export default LanFontCaseRegular;
