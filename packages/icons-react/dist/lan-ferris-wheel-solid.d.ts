import React from 'react';

export interface LanFerrisWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerrisWheelSolid: React.FC<LanFerrisWheelSolidProps>;
export default LanFerrisWheelSolid;
