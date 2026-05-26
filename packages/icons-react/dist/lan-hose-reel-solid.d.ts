import React from 'react';

export interface LanHoseReelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseReelSolid: React.FC<LanHoseReelSolidProps>;
export default LanHoseReelSolid;
