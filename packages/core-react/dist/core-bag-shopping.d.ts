import React from 'react';

export interface CoreBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBagShopping(props: CoreBagShoppingProps): React.ReactElement;
export default CoreBagShopping;
