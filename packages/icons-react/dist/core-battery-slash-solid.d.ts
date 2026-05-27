import React from 'react';

export interface CoreBatterySlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatterySlashSolid: React.FC<CoreBatterySlashSolidProps>;
export default CoreBatterySlashSolid;
