import React from 'react';

export interface LanPlusMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusMinusThin: React.FC<LanPlusMinusThinProps>;
export default LanPlusMinusThin;
