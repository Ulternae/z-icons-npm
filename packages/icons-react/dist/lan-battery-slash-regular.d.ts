import React from 'react';

export interface LanBatterySlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatterySlashRegular: React.FC<LanBatterySlashRegularProps>;
export default LanBatterySlashRegular;
