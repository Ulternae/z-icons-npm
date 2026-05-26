import React from 'react';

export interface LanStarSharpHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpHalfSolid: React.FC<LanStarSharpHalfSolidProps>;
export default LanStarSharpHalfSolid;
