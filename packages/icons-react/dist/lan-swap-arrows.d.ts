import React from 'react';

export interface LanSwapArrowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapArrows: React.FC<LanSwapArrowsProps>;
export default LanSwapArrows;
