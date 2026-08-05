import React from 'react';

export interface MinaTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTruckSolid(props: MinaTruckSolidProps): React.ReactElement;
export default MinaTruckSolid;
