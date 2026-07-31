import React from 'react';

export const LanIceSkateRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 0c13.3 0 24 10.7 24 24v198.1l6.2 1.9h1.8v.5l77.9 23.4c44 13.2 74.1 53.7 74.1 99.6V368c0 26.5-21.5 48-48 48v48h72c13.3 0 24-10.7 24-24v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 39.8-32.2 72-72 72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h72v-50.8c-18.6-6.6-32-24.3-32-45.2V96l.4-4.3c1.8-9.9 9.7-17.8 19.9-19.4L272 43.4V24c0-13.3 10.7-24 24-24M144 464h240v-48H144zm-32-347.4V368h320v-20.5c0-23.2-14.3-43.8-35.6-52.2l-4.3-1.5-73-21.9H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-32h-56c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-52l-160 24.6z"})
);

export default LanIceSkateRegular;
