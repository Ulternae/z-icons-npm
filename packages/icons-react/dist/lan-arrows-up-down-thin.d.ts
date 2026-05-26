import React from 'react';

export interface LanArrowsUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsUpDownThin: React.FC<LanArrowsUpDownThinProps>;
export default LanArrowsUpDownThin;
