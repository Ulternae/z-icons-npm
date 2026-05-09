import React from 'react';

export interface MinaSearchDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchDiamond: React.FC<MinaSearchDiamondProps>;
export default MinaSearchDiamond;
