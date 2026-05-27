import React from 'react';

export const NeoCircleInfoRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 280c0-71 22.5-126.4 60-164s93-60 164-60 126.4 22.5 164 60 60 93 60 164-22.5 126.4-60 164-93 60-164 60-126.4-22.5-164-60-60-93-60-164m140-28c0 15.5 12.5 28 28 28h28v112h-28c-15.5 0-28 12.5-28 28s12.5 28 28 28h112c15.5 0 28-12.5 28-28s-12.5-28-28-28h-28V280c0-30.9-25.1-56-56-56h-28c-15.5 0-28 12.5-28 28m42-98a42 42 0 1 0 84 0 42 42 0 1 0-84 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M238 154a42 42 0 1 1 84 0 42 42 0 1 1-84 0m-14 70c-15.5 0-28 12.5-28 28s12.5 28 28 28h28v112h-28c-15.5 0-28 12.5-28 28s12.5 28 28 28h112c15.5 0 28-12.5 28-28s-12.5-28-28-28h-28V280c0-30.9-25.1-56-56-56zM76.5 76.5C126.4 26.5 197 0 280 0s153.6 26.5 203.5 76.5S560 197 560 280s-26.5 153.6-76.5 203.5S363 560 280 560s-153.6-26.5-203.5-76.5S0 363 0 280 26.5 126.4 76.5 76.5M116 116c-37.6 37.6-60 93-60 164s22.5 126.4 60 164 93 60 164 60 126.4-22.5 164-60 60-93 60-164-22.5-126.4-60-164-93-60-164-60-126.4 22.5-164 60"})
);

export default NeoCircleInfoRegular-duo;
