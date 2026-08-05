import React from 'react';

export interface CoreBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryBoltSolid(props: CoreBatteryBoltSolidProps): React.ReactElement;
export default CoreBatteryBoltSolid;
