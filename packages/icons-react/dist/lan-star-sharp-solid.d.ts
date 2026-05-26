import React from 'react';

export interface LanStarSharpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpSolid: React.FC<LanStarSharpSolidProps>;
export default LanStarSharpSolid;
