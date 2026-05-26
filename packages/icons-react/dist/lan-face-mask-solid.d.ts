import React from 'react';

export interface LanFaceMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMaskSolid: React.FC<LanFaceMaskSolidProps>;
export default LanFaceMaskSolid;
