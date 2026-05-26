import React from 'react';

export interface LanTruckFlatbedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFlatbed: React.FC<LanTruckFlatbedProps>;
export default LanTruckFlatbed;
