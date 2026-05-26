import React from 'react';

export interface LanBatteryThreeQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryThreeQuarters: React.FC<LanBatteryThreeQuartersProps>;
export default LanBatteryThreeQuarters;
