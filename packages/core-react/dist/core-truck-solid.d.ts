import React from 'react';

export interface CoreTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTruckSolid(props: CoreTruckSolidProps): React.ReactElement;
export default CoreTruckSolid;
