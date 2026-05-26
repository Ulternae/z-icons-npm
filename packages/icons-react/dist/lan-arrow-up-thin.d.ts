import React from 'react';

export interface LanArrowUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpThin: React.FC<LanArrowUpThinProps>;
export default LanArrowUpThin;
