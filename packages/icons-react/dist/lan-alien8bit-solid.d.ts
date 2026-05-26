import React from 'react';

export interface LanAlien8bitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlien8bitSolid: React.FC<LanAlien8bitSolidProps>;
export default LanAlien8bitSolid;
