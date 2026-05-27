import React from 'react';

export interface CoreBatterySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatterySlash: React.FC<CoreBatterySlashProps>;
export default CoreBatterySlash;
