import React from 'react';

export interface LanZzzThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZzzThin: React.FC<LanZzzThinProps>;
export default LanZzzThin;
