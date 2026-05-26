import React from 'react';

export const LanHouseMedicalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M245.1 7.2c6.1-5.7 15.7-5.7 21.8 0l234.6 219c3.2 3 3.4 8.1.4 11.3s-8.1 3.4-11.3.4L464 213.1V456c0 30.9-25.1 56-56 56H104c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM256 18.9 64 198.1V456c0 22.1 17.9 40 40 40h304c22.1 0 40-17.9 40-40V198.1zM232 216v40c0 2.1-.8 4.2-2.3 5.7s-3.5 2.3-5.7 2.3h-40c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m8-24h32c13.3 0 24 10.7 24 24v32h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24"})
);

export default LanHouseMedicalThin;
