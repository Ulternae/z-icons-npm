import React from 'react';

export interface LanHeadSideMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideMaskSolid: React.FC<LanHeadSideMaskSolidProps>;
export default LanHeadSideMaskSolid;
