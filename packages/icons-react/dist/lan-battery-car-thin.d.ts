import React from 'react';

export interface LanBatteryCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryCarThin: React.FC<LanBatteryCarThinProps>;
export default LanBatteryCarThin;
