import React from 'react';

export interface MinaLetterUDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUDiamondSolid: React.FC<MinaLetterUDiamondSolidProps>;
export default MinaLetterUDiamondSolid;
