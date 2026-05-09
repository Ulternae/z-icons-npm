import React from 'react';

export interface MinaLocationSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSnooze: React.FC<MinaLocationSnoozeProps>;
export default MinaLocationSnooze;
