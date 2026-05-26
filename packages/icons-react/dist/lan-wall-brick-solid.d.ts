import React from 'react';

export interface LanWallBrickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWallBrickSolid: React.FC<LanWallBrickSolidProps>;
export default LanWallBrickSolid;
