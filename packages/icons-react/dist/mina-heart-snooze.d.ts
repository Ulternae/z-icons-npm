import React from 'react';

export interface MinaHeartSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSnooze: React.FC<MinaHeartSnoozeProps>;
export default MinaHeartSnooze;
