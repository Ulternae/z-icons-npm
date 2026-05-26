import React from 'react';

export interface LanTruckFlatbedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFlatbedThin: React.FC<LanTruckFlatbedThinProps>;
export default LanTruckFlatbedThin;
