import React from 'react';

export interface LanDedentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDedent: React.FC<LanDedentProps>;
export default LanDedent;
