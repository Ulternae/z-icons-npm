import React from 'react';

export interface NeoShopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShop(props: NeoShopProps): React.ReactElement;
export default NeoShop;
