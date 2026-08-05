import React from 'react';

export interface LanBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagShopping(props: LanBagShoppingProps): React.ReactElement;
export default LanBagShopping;
