import React from 'react';

export interface LanPencilMechanicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilMechanicalThin: React.FC<LanPencilMechanicalThinProps>;
export default LanPencilMechanicalThin;
