import React from 'react';

export interface LanBagShoppingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagShoppingRegular(props: LanBagShoppingRegularProps): React.ReactElement;
export default LanBagShoppingRegular;
