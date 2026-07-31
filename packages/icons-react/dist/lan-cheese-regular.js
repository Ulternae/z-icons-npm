import React from 'react';

export const LanCheeseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 240.2V256H48c0-3.9 2-7.6 5.3-9.8L301.5 80.7c.7-.4 1.4-.7 2.3-.7C392.3 80 464 151.7 464 240.2M48 304h416v112c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm464-48v-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"})
);

export default LanCheeseRegular;
