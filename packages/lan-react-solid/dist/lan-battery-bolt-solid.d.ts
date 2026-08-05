import React from 'react';

export interface LanBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryBoltSolid(props: LanBatteryBoltSolidProps): React.ReactElement;
export default LanBatteryBoltSolid;
