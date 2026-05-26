import React from 'react';

export interface LanBatterySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatterySlash: React.FC<LanBatterySlashProps>;
export default LanBatterySlash;
