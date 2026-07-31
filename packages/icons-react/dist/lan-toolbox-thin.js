import React from 'react';

export const LanToolboxThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M168 16h176c13.3 0 24 10.7 24 24v56H144V40c0-13.3 10.7-24 24-24m-40 24v56H99.9C87.2 96 75 101.1 66 110.1l-51.9 51.8c-9 9-14.1 21.2-14.1 33.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V195.9c0-12.7-5.1-24.9-14.1-33.9L446 110.1c-9-9-21.2-14.1-33.9-14.1H384V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40M16 312h136v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h176v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h136v104c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm0-16V195.9c0-8.5 3.4-16.6 9.4-22.6l51.9-51.9c6-6 14.1-9.4 22.6-9.4h312.2c8.5 0 16.6 3.4 22.6 9.4l51.9 51.9c6 6 9.4 14.1 9.4 22.6V296H360v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H168v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40z"})
);

export default LanToolboxThin;
