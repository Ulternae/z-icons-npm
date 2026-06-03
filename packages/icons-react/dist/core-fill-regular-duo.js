import React from 'react';

export const CoreFillRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -29.2 576 569.2',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M67.3 316h276L223.2 436.1c-12.5 12.5-32.8 12.5-45.2 0L76.4 334.6c-5.2-5.2-8.2-11.8-9.1-18.6","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m518.9 367.2 38.4 51.2c9.9 13.2 15.2 29.2 15.2 45.6 0 42-34 76-76 76s-76-34-76-76c0-16.4 5.3-32.4 15.2-45.6 28.3-37.7 48.5-64.7 60.8-81.1l22.4 29.8zm-63.8-117.8c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L268.4 481.4c-37.5 37.5-98.3 37.5-135.8 0L31.1 379.9c-37.5-37.5-37.5-98.3 0-135.8L195.2 80l-64-64 45.2-45.2L455 249.4zM480.5 452c-2.6 3.5-4 7.7-4 12 0 11 9 20 20 20s20-9 20-20c0-4.3-1.4-8.5-4-12l-16-21.3zM67.3 316c.9 6.8 3.9 13.4 9.1 18.6l101.5 101.5c12.5 12.5 32.8 12.5 45.2 0L343.2 316h-276zm38.5-56h269.4L240.5 125.2 105.7 260z"})
);

export default CoreFillRegularDuo;
