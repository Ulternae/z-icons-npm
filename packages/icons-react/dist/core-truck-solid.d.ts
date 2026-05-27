import React from 'react';

export interface CoreTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTruckSolid: React.FC<CoreTruckSolidProps>;
export default CoreTruckSolid;
