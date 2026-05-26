import React from 'react';

export interface LanHouseChimneyUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyUserSolid: React.FC<LanHouseChimneyUserSolidProps>;
export default LanHouseChimneyUserSolid;
