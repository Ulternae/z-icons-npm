import React from 'react';

export interface CoreShopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShop(props: CoreShopProps): React.ReactElement;
export default CoreShop;
