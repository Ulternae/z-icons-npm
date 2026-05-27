import React from 'react';

export interface CoreBatteryHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryHalf: React.FC<CoreBatteryHalfProps>;
export default CoreBatteryHalf;
