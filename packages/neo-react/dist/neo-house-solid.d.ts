import React from 'react';

export interface NeoHouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHouseSolid(props: NeoHouseSolidProps): React.ReactElement;
export default NeoHouseSolid;
