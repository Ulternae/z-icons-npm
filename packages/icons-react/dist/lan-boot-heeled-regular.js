import React from 'react';

export const LanBootHeeledRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0C17.1 0 10.6 2.9 6 8.1S-.7 20.1.2 26.9l30.2 249.7c.7 5.9.1 11.8-1.8 17.5L7.8 356.7C2.6 372.2 0 388.4 0 404.8V488c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-29.6l53.3 32c23.6 14.2 50.7 21.7 78.2 21.7L424 512c13.3 0 24-10.7 24-24v-49.2c0-32.8-18.2-62.9-47.3-78l-111.8-58.4c-14.3-7.5-22.7-22.8-21.4-38.9L287.9 26c.6-6.7-1.7-13.3-6.2-18.3S270.7 0 264 0zm24 440h64v24H48zm88-48H48.8c.8-6.8 2.4-13.6 4.5-20.1l20.9-62.6c4.1-12.4 5.4-25.5 3.9-38.4L51.1 48H112v152c0 13.3 10.7 24 24 24s24-10.7 24-24V48h77.9l-18.1 211.5c-3 35.4 15.5 69.1 47 85.5l111.8 58.3c13.2 6.9 21.5 20.6 21.5 35.5V464H291.6c-18.8 0-37.3-5.1-53.5-14.8l-89.6-53.8c-3.7-2.2-8-3.4-12.3-3.4z"})
);

export default LanBootHeeledRegular;
