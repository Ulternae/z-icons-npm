import React from 'react';

export interface MinaShoppingBagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShoppingBagSolid(props: MinaShoppingBagSolidProps): React.ReactElement;
export default MinaShoppingBagSolid;
