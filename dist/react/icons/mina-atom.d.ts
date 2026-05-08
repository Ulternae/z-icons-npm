import React from 'react';

export interface MinaAtomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAtom: React.FC<MinaAtomProps>;
export default MinaAtom;
