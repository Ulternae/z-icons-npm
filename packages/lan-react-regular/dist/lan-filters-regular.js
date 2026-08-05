import React from 'react';

export function LanFiltersRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M189.7 32C173.3 32 160 45.3 160 61.7c0 7.9 3.1 15.4 8.7 21L304 217.9V320c0 6.4 2.5 12.5 7 17l70.3 70.3c5.6 5.6 13.1 8.7 21 8.7 16.4 0 29.7-13.3 29.7-29.7V217.9L567.3 82.6c5.6-5.6 8.7-13.1 8.7-21 0-16.4-13.3-29.7-29.7-29.7zM345 191 234 80h268.1l-111 111c-4.5 4.5-7 10.6-7 17v134.1l-32-32V208c0-6.4-2.5-12.5-7-17zm-198.8-63H29.7C13.3 128 0 141.3 0 157.7c0 7.9 3.1 15.4 8.7 21L144 313.9V416c0 6.4 2.5 12.5 7 17l70.3 70.3c5.6 5.6 13.1 8.7 21 8.7 16.4 0 29.7-13.3 29.7-29.7V365.2c-10.3-12.7-16-28.7-16-45.3V262l-25 25c-4.5 4.5-7 10.6-7 17v134.1l-32-32V304c0-6.4-2.5-12.5-7-17L74 176h120.2z"})
  );
}

export default LanFiltersRegular;
