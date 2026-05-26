import React from 'react';

export interface LanHouseNightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseNightRegular: React.FC<LanHouseNightRegularProps>;
export default LanHouseNightRegular;
