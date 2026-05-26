import React from 'react';

export interface LanBatterySlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatterySlashSolid: React.FC<LanBatterySlashSolidProps>;
export default LanBatterySlashSolid;
