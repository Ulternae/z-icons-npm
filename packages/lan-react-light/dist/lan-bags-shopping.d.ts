import React from 'react';

export interface LanBagsShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagsShopping(props: LanBagsShoppingProps): React.ReactElement;
export default LanBagsShopping;
