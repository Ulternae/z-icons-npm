import React from 'react';

export interface LanArrowsSpinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsSpinThin: React.FC<LanArrowsSpinThinProps>;
export default LanArrowsSpinThin;
