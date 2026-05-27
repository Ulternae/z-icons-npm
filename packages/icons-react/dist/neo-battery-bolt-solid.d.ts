import React from 'react';

export interface NeoBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryBoltSolid: React.FC<NeoBatteryBoltSolidProps>;
export default NeoBatteryBoltSolid;
