import React from 'react';

export interface LanLeafyGreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafyGreenSolid: React.FC<LanLeafyGreenSolidProps>;
export default LanLeafyGreenSolid;
