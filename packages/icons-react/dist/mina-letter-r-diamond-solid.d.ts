import React from 'react';

export interface MinaLetterRDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRDiamondSolid: React.FC<MinaLetterRDiamondSolidProps>;
export default MinaLetterRDiamondSolid;
