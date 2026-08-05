import React from 'react';

export function LanAxeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m489 7 48 48c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L455 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 34-.1m2.7 184.6L352 51.9 275.9 128l139.7 139.7c10.5 10.5 16.4 24.7 16.4 39.6v60c84.4-7.6 151.7-74.8 159.3-159.3h-60c-14.9 0-29.1-5.9-39.6-16.4M385.9 17.9l139.8 139.8c1.5 1.5 3.5 2.3 5.7 2.3h84.7c13.3 0 24 10.7 24 24v8c0 123.7-100.3 224-224 224h-8c-13.3 0-24-10.7-24-24v-84.7c0-2.1-.8-4.2-2.3-5.7L361 281 153 489c-27 27-70.9 27-97.9 0S28 418.1 55 391l208-208-21.1-21.1c-18.7-18.7-18.7-49.1 0-67.9L318 17.9c18.7-18.7 49.1-18.7 67.9 0M297 217 89 425c-8.3 8.3-8.3 21.8 0 30.1s21.8 8.3 30.1 0L327 247z"})
  );
}

export default LanAxeRegular;
