import React from 'react';

export function CoreWandMagicSparklesRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m93.3 400 229.6-229.6 50.7 50.8L144 450.7z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M508 420h68v56h-68v68h-56v-68h-68v-56h68v-68h56zm65.2-308-384 384c-25 25-65.5 25-90.5 0L48 445.3c-25-25-25-65.5 0-90.5l384-384L573.3 112zM93.3 400l50.7 50.7 229.6-229.5-50.8-50.8zm269.2-269.2 50.8 50.8 69.6-69.6-50.7-50.8-69.6 69.6zM124 36h68v56h-68v68H68V92H0V36h68v-68h56z"})
  );
}

export default CoreWandMagicSparklesRegularDuo;
