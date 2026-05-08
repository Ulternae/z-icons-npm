import React from 'react';

export interface MinaSearchSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchSnooze: React.FC<MinaSearchSnoozeProps>;
export default MinaSearchSnooze;
