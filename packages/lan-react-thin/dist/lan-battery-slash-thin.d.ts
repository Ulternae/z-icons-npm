import React from 'react';

export interface LanBatterySlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatterySlashThin(props: LanBatterySlashThinProps): React.ReactElement;
export default LanBatterySlashThin;
