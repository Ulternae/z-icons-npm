import React from 'react';

export interface LanStarshipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipSolid: React.FC<LanStarshipSolidProps>;
export default LanStarshipSolid;
