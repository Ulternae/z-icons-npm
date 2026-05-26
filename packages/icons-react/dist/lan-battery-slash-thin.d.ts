import React from 'react';

export interface LanBatterySlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatterySlashThin: React.FC<LanBatterySlashThinProps>;
export default LanBatterySlashThin;
