import React from 'react';

export interface LanZapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZapThin: React.FC<LanZapThinProps>;
export default LanZapThin;
