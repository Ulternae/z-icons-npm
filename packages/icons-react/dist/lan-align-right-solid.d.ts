import React from 'react';

export interface LanAlignRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignRightSolid: React.FC<LanAlignRightSolidProps>;
export default LanAlignRightSolid;
