import React from 'react';

export interface NeoBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBagShopping(props: NeoBagShoppingProps): React.ReactElement;
export default NeoBagShopping;
