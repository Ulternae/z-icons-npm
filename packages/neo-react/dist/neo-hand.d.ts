import React from 'react';

export interface NeoHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHand(props: NeoHandProps): React.ReactElement;
export default NeoHand;
