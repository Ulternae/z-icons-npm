import React from 'react';

export interface LanBatterySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatterySlash(props: LanBatterySlashProps): React.ReactElement;
export default LanBatterySlash;
