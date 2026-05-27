import React from 'react';

export interface NeoShopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShop: React.FC<NeoShopProps>;
export default NeoShop;
