import React from 'react';

export interface LanStarShootingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarShootingSolid: React.FC<LanStarShootingSolidProps>;
export default LanStarShootingSolid;
