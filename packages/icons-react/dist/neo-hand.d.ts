import React from 'react';

export interface NeoHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHand: React.FC<NeoHandProps>;
export default NeoHand;
