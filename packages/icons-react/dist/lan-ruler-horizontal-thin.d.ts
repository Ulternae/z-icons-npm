import React from 'react';

export interface LanRulerHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerHorizontalThin: React.FC<LanRulerHorizontalThinProps>;
export default LanRulerHorizontalThin;
