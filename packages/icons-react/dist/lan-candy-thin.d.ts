import React from 'react';

export interface LanCandyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyThin: React.FC<LanCandyThinProps>;
export default LanCandyThin;
