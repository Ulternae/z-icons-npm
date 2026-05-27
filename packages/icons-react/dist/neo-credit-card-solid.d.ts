import React from 'react';

export interface NeoCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCreditCardSolid: React.FC<NeoCreditCardSolidProps>;
export default NeoCreditCardSolid;
