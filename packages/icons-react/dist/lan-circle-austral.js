import React from 'react';

export const LanCircleAustral = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-353.9 29.2 65.9h-58.4zm20.5-32.7c-3.6-8.1-11.6-13.4-20.5-13.4s-16.9 5.2-20.5 13.4L191.8 224H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h33.6l-14.2 32h-19.5c-8.8 0-16 7.2-16 16s7.2 16 16 16h5.3l-11.3 25.5c-3.6 8.1.1 17.5 8.2 21.1s17.5-.1 21.1-8.2l17-38.5h143.4l17 38.5c3.6 8.1 13 11.7 21.1 8.2s11.7-13 8.2-21.1L362.6 320h5.3c8.8 0 16-7.2 16-16s-7.2-16-16-16h-19.5l-14.2-32h33.6c8.8 0 16-7.2 16-16s-7.2-16-16-16H320l-43.7-98.6zM212.6 256h86.8l14.2 32H198.5l14.2-32z"})
);

export default LanCircleAustral;
