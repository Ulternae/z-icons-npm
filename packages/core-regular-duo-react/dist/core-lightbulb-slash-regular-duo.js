import React from 'react';

export function CoreLightbulbSlashRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.3 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m273 73 166.2 166.2c5.8-14.6 9-30.5 9-47.2 0-48-26.5-89.9-65.6-111.8-.4-.2-.9-.5-1.3-.7 0 0-.1 0-.1-.1-3.6-2-7.4-3.8-11.2-5.4-.9-.4-1.9-.8-2.8-1.2h-.1c-1-.4-1.9-.7-2.9-1.1-2-.7-3.9-1.4-5.9-2-12-3.7-24.8-5.8-38.1-5.8-16.7 0-32.6 3.2-47.2 9z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zm-237.2-56.3v56.2h-128v-64h120.3l7.8 7.8zM344.5 416h-56.3c-33.2 0-60.4-25.2-63.7-57.5-55.3-31.9-93.3-90.6-96.1-158.5l216 216zM320.3 0c106 0 192 86 192 192 0 34.6-9.2 67-25.3 95l-47.8-47.8c5.8-14.6 9-30.5 9-47.2 0-70.7-57.3-128-128-128-16.7 0-32.6 3.2-47.2 9l-47.8-47.8c28-16 60.5-25.2 95.1-25.2"})
  );
}

export default CoreLightbulbSlashRegularDuo;
