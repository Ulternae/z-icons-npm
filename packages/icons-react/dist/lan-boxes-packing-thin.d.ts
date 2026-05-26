import React from 'react';

export interface LanBoxesPackingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesPackingThin: React.FC<LanBoxesPackingThinProps>;
export default LanBoxesPackingThin;
