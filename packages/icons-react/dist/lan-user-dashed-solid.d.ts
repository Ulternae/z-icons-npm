import React from 'react';

export interface LanUserDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserDashedSolid: React.FC<LanUserDashedSolidProps>;
export default LanUserDashedSolid;
