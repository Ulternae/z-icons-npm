import React from 'react';

export interface CoreBatterySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatterySlash(props: CoreBatterySlashProps): React.ReactElement;
export default CoreBatterySlash;
