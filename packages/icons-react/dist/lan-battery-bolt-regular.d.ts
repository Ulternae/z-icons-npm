import React from 'react';

export interface LanBatteryBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryBoltRegular: React.FC<LanBatteryBoltRegularProps>;
export default LanBatteryBoltRegular;
