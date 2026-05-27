import React from 'react';

export interface NeoHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHouse: React.FC<NeoHouseProps>;
export default NeoHouse;
