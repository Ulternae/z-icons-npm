import React from 'react';

export interface LanHouseWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseWindowRegular: React.FC<LanHouseWindowRegularProps>;
export default LanHouseWindowRegular;
