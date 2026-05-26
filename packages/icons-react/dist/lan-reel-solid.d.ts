import React from 'react';

export interface LanReelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReelSolid: React.FC<LanReelSolidProps>;
export default LanReelSolid;
