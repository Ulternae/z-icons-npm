import React from 'react';

export interface MinaBellSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellSnooze: React.FC<MinaBellSnoozeProps>;
export default MinaBellSnooze;
