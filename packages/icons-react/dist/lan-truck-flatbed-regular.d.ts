import React from 'react';

export interface LanTruckFlatbedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFlatbedRegular: React.FC<LanTruckFlatbedRegularProps>;
export default LanTruckFlatbedRegular;
