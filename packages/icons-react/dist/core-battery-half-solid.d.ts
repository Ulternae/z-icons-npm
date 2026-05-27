import React from 'react';

export interface CoreBatteryHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryHalfSolid: React.FC<CoreBatteryHalfSolidProps>;
export default CoreBatteryHalfSolid;
