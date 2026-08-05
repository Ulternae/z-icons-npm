import React from 'react';

export interface NeoHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHouse(props: NeoHouseProps): React.ReactElement;
export default NeoHouse;
