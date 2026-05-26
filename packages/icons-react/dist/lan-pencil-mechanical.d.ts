import React from 'react';

export interface LanPencilMechanicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilMechanical: React.FC<LanPencilMechanicalProps>;
export default LanPencilMechanical;
