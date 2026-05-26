import React from 'react';

export interface LanSleighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSleigh: React.FC<LanSleighProps>;
export default LanSleigh;
