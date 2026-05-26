import React from 'react';

export interface LanHouseChimneyUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyUser: React.FC<LanHouseChimneyUserProps>;
export default LanHouseChimneyUser;
