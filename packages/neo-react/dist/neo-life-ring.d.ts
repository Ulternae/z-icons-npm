import React from 'react';

export interface NeoLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLifeRing(props: NeoLifeRingProps): React.ReactElement;
export default NeoLifeRing;
