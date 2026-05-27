import React from 'react';

export interface NeoShopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShopRegularDuo: React.FC<NeoShopRegularDuoProps>;
export default NeoShopRegularDuo;
