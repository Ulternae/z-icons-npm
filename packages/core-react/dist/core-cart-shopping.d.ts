import React from 'react';

export interface CoreCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCartShopping(props: CoreCartShoppingProps): React.ReactElement;
export default CoreCartShopping;
