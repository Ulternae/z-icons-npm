import React from 'react';

export interface LanDedentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDedentThin: React.FC<LanDedentThinProps>;
export default LanDedentThin;
