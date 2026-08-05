import React from 'react';

export interface LanBatteryBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryBoltThin(props: LanBatteryBoltThinProps): React.ReactElement;
export default LanBatteryBoltThin;
