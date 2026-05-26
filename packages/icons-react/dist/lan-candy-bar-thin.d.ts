import React from 'react';

export interface LanCandyBarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyBarThin: React.FC<LanCandyBarThinProps>;
export default LanCandyBarThin;
