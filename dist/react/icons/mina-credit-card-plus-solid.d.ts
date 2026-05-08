import React from 'react';

export interface MinaCreditCardPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardPlusSolid: React.FC<MinaCreditCardPlusSolidProps>;
export default MinaCreditCardPlusSolid;
