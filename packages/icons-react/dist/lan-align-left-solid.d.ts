import React from 'react';

export interface LanAlignLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignLeftSolid: React.FC<LanAlignLeftSolidProps>;
export default LanAlignLeftSolid;
