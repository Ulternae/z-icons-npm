import React from 'react';

export const NeoMartiniGlassRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M85 196c38.1 39.4 101.5 98.7 167 133 65.4-34.3 128.8-93.5 167-133z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M470.8 16.3c9-12.6 6.1-30.1-6.5-39.1s-30.1-6.1-39.1 6.5L351 87.6c-28.9-2.1-62.1-3.6-99-3.6-94.2 0-163.8 9.3-200.7 15.8C20.4 105.2 0 132.2 0 161.7c0 15 5.2 30 15.7 41.8C42.3 233.6 129.2 327.3 224 377.6v126.3H112c-15.5 0-28 12.5-28 28s12.5 28 28 28h280c15.5 0 28-12.5 28-28s-12.5-28-28-28H280V377.6c94.9-50.3 181.7-144 208.3-174.1 10.5-11.8 15.7-26.8 15.7-41.8 0-29.6-20.4-56.5-51.3-61.9-10.1-1.8-22.7-3.7-37.5-5.7zM57.6 166.4c-3.1-3.5-1.7-10.6 3.3-11.5 34.2-6 100.6-14.9 191.1-14.9s156.8 9 191.1 14.9c5 .9 6.4 8 3.3 11.5C419.8 196.5 337.7 284 252 328.9 166.4 284 84.2 196.4 57.6 166.4"})
);

export default NeoMartiniGlassRegularDuo;
