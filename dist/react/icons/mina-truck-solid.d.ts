import React from 'react';

export interface MinaTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTruckSolid: React.FC<MinaTruckSolidProps>;
export default MinaTruckSolid;
