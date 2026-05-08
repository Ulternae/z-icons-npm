import React from 'react';

export interface MinaLetterADiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterADiamondSolid: React.FC<MinaLetterADiamondSolidProps>;
export default MinaLetterADiamondSolid;
