import React from 'react';

export interface LanBagShoppingPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagShoppingPlus(props: LanBagShoppingPlusProps): React.ReactElement;
export default LanBagShoppingPlus;
