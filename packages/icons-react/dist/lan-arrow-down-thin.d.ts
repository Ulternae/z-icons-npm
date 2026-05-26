import React from 'react';

export interface LanArrowDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownThin: React.FC<LanArrowDownThinProps>;
export default LanArrowDownThin;
