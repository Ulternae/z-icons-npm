import React from 'react';

export interface LanCupStrawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawSolid: React.FC<LanCupStrawSolidProps>;
export default LanCupStrawSolid;
