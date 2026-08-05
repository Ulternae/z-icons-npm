import React from 'react';

export interface NeoBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryBoltSolid(props: NeoBatteryBoltSolidProps): React.ReactElement;
export default NeoBatteryBoltSolid;
