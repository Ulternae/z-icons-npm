import React from 'react';

export interface LanCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartShopping(props: LanCartShoppingProps): React.ReactElement;
export default LanCartShopping;
