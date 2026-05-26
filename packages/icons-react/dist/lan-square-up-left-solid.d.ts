import React from 'react';

export interface LanSquareUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUpLeftSolid: React.FC<LanSquareUpLeftSolidProps>;
export default LanSquareUpLeftSolid;
