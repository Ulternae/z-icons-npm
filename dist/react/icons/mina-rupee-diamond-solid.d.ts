import React from 'react';

export interface MinaRupeeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeDiamondSolid: React.FC<MinaRupeeDiamondSolidProps>;
export default MinaRupeeDiamondSolid;
