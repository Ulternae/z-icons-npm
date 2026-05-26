import React from 'react';

export interface LanBatteryExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryExclamation: React.FC<LanBatteryExclamationProps>;
export default LanBatteryExclamation;
