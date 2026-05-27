import React from 'react';

export interface NeoTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTruckSolid: React.FC<NeoTruckSolidProps>;
export default NeoTruckSolid;
