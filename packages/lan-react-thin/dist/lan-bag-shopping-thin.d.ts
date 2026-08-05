import React from 'react';

export interface LanBagShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagShoppingThin(props: LanBagShoppingThinProps): React.ReactElement;
export default LanBagShoppingThin;
