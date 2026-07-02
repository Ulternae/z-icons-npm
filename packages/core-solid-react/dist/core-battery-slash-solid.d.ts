import React from 'react';

export interface CoreBatterySlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatterySlashSolid(props: CoreBatterySlashSolidProps): React.ReactElement;
export default CoreBatterySlashSolid;
