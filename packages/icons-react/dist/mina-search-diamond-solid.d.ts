import React from 'react';

export interface MinaSearchDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchDiamondSolid: React.FC<MinaSearchDiamondSolidProps>;
export default MinaSearchDiamondSolid;
