import React from 'react';

export interface LanHouseChimneyUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyUserThin: React.FC<LanHouseChimneyUserThinProps>;
export default LanHouseChimneyUserThin;
