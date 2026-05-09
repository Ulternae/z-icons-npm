import React from 'react';

export interface MinaCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardSolid: React.FC<MinaCreditCardSolidProps>;
export default MinaCreditCardSolid;
