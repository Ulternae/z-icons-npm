import React from 'react';

export interface LanFileHalfDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHalfDashedSolid: React.FC<LanFileHalfDashedSolidProps>;
export default LanFileHalfDashedSolid;
