import React from 'react';

export interface NeoHouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHouseSolid: React.FC<NeoHouseSolidProps>;
export default NeoHouseSolid;
