import React from 'react';

export const LanRobotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M344-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c53 0 96-43 96-96V160c0-53-43-96-96-96H344zm-24 120h128c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zM176 360c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m112 0c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24m96 0c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m-144-72a48 48 0 1 0 0-96 48 48 0 1 0 0 96m208-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M48 216c0-13.3-10.7-24-24-24S0 202.7 0 216v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm568-24c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V216c0-13.3-10.7-24-24-24"})
);

export default LanRobotRegular;
