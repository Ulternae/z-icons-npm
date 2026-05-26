import React from 'react';

export interface LanBatteryCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryCarSolid: React.FC<LanBatteryCarSolidProps>;
export default LanBatteryCarSolid;
