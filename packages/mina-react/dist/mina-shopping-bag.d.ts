import React from 'react';

export interface MinaShoppingBagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShoppingBag(props: MinaShoppingBagProps): React.ReactElement;
export default MinaShoppingBag;
