import React from 'react';

export interface LanHouseChimneyBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyBlankSolid: React.FC<LanHouseChimneyBlankSolidProps>;
export default LanHouseChimneyBlankSolid;
