import React from 'react';

export interface LanCarBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBurstRegular: React.FC<LanCarBurstRegularProps>;
export default LanCarBurstRegular;
