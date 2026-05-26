import React from 'react';

export interface LanFaceTiredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTiredSolid: React.FC<LanFaceTiredSolidProps>;
export default LanFaceTiredSolid;
