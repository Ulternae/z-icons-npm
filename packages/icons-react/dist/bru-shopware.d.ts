import React from 'react';

export interface BruShopwareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruShopware: React.FC<BruShopwareProps>;
export default BruShopware;
