import React from 'react';

export interface LanBlockBrickFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockBrickFireSolid: React.FC<LanBlockBrickFireSolidProps>;
export default LanBlockBrickFireSolid;
