import React from 'react';

export interface MinaAtomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAtomSolid: React.FC<MinaAtomSolidProps>;
export default MinaAtomSolid;
