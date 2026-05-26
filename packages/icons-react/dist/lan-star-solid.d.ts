import React from 'react';

export interface LanStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSolid: React.FC<LanStarSolidProps>;
export default LanStarSolid;
