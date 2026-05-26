import React from 'react';

export interface LanBatteryCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryCarRegular: React.FC<LanBatteryCarRegularProps>;
export default LanBatteryCarRegular;
