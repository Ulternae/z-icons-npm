import React from 'react';

export interface LanBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryBolt(props: LanBatteryBoltProps): React.ReactElement;
export default LanBatteryBolt;
