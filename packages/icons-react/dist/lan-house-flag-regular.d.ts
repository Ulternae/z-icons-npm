import React from 'react';

export interface LanHouseFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFlagRegular: React.FC<LanHouseFlagRegularProps>;
export default LanHouseFlagRegular;
