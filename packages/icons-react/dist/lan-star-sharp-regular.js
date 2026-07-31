import React from 'react';

export const LanStarSharpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c10.5 0 19.7 6.8 22.9 16.7L329.6 176H488c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7L371.9 320.7l51 160c3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7L256 406.4 126.7 506.9c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27l51-159.9L9.3 218.9c-8.1-6.3-11.3-17-8-26.7S13.7 176 24 176h158.5l50.7-159.3C236.3 6.8 245.6 0 256 0m0 103.2-33.1 104.1c-3.2 10-12.4 16.7-22.9 16.7H94l88.7 69.1c7.9 6.2 11.2 16.6 8.1 26.2l-32.5 102.3 82.9-64.5c8.7-6.7 20.8-6.7 29.5 0l82.9 64.5-32.5-102.3c-3-9.6.2-20 8.1-26.2l88.9-69.1H312c-10.5 0-19.7-6.8-22.9-16.7z"})
);

export default LanStarSharpRegular;
