import React from 'react';

export const LanDownUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M360 176h-63c-22.6 0-41-18.3-41-41 0-10.9 4.3-21.3 12-29l99-99c4.5-4.5 10.6-7 17-7s12.5 2.5 17 7l99 99c7.7 7.7 12 18.1 12 29 0 22.6-18.3 41-41 41h-63v312c0 13.3-10.7 24-24 24s-24-10.7-24-24zm24-118.1L313.9 128h140.2zM0 377c0-22.6 18.3-41 41-41h63V24c0-13.3 10.7-24 24-24s24 10.7 24 24v312h63c22.6 0 41 18.3 41 41 0 10.9-4.3 21.3-12 29l-99 99c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-99-99c-7.7-7.7-12-18.1-12-29m57.9 7 70.1 70.1 70.1-70.1H58z"})
);

export default LanDownUpRegular;
