import React from 'react';

export interface NeoCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCartShopping(props: NeoCartShoppingProps): React.ReactElement;
export default NeoCartShopping;
