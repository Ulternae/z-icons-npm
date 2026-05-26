import React from 'react';

export interface LanHouseChimneyWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyWindowThin: React.FC<LanHouseChimneyWindowThinProps>;
export default LanHouseChimneyWindowThin;
