import React from 'react';

export interface CoreBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryBolt(props: CoreBatteryBoltProps): React.ReactElement;
export default CoreBatteryBolt;
