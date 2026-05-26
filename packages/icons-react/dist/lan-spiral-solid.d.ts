import React from 'react';

export interface LanSpiralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiralSolid: React.FC<LanSpiralSolidProps>;
export default LanSpiralSolid;
