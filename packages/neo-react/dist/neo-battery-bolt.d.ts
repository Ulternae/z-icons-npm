import React from 'react';

export interface NeoBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryBolt(props: NeoBatteryBoltProps): React.ReactElement;
export default NeoBatteryBolt;
