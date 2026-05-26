import React from 'react';

export interface LanHouseChimneyWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyWindowSolid: React.FC<LanHouseChimneyWindowSolidProps>;
export default LanHouseChimneyWindowSolid;
