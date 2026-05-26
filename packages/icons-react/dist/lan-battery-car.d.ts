import React from 'react';

export interface LanBatteryCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryCar: React.FC<LanBatteryCarProps>;
export default LanBatteryCar;
