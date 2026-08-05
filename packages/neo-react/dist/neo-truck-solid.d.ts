import React from 'react';

export interface NeoTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTruckSolid(props: NeoTruckSolidProps): React.ReactElement;
export default NeoTruckSolid;
