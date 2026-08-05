import React from 'react';

export interface LanBasketShoppingPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketShoppingPlus(props: LanBasketShoppingPlusProps): React.ReactElement;
export default LanBasketShoppingPlus;
