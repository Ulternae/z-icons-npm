import React from 'react';

export const MinaUserSettings = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"}), React.createElement("path", {"d":"M11.192 17.565c.394-.21.591-.315.808-.315s.414.105.808.315l.134.072c.394.21.591.315.7.488s.108.383.108.804v.142c0 .42 0 .63-.108.804-.109.173-.306.278-.7.488l-.134.072c-.394.21-.591.315-.808.315s-.414-.105-.808-.315l-.134-.072c-.394-.21-.591-.315-.7-.488s-.108-.383-.108-.804v-.142c0-.42 0-.63.108-.804.109-.173.306-.278.7-.488z"})
);

export default MinaUserSettings;
