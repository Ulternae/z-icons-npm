import React from 'react';

export interface NeoCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCreditCardSolid(props: NeoCreditCardSolidProps): React.ReactElement;
export default NeoCreditCardSolid;
