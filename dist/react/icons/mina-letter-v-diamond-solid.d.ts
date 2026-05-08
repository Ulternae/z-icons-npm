import React from 'react';

export interface MinaLetterVDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVDiamondSolid: React.FC<MinaLetterVDiamondSolidProps>;
export default MinaLetterVDiamondSolid;
