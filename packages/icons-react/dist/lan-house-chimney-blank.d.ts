import React from 'react';

export interface LanHouseChimneyBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyBlank: React.FC<LanHouseChimneyBlankProps>;
export default LanHouseChimneyBlank;
