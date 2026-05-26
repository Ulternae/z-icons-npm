import React from 'react';

export interface LanCupStrawSwooshSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawSwooshSolid: React.FC<LanCupStrawSwooshSolidProps>;
export default LanCupStrawSwooshSolid;
