import React from 'react';

export interface LanHouseChimneyWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyWindowRegular: React.FC<LanHouseChimneyWindowRegularProps>;
export default LanHouseChimneyWindowRegular;
