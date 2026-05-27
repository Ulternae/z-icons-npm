import React from 'react';

export interface CoreCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCreditCardSolid: React.FC<CoreCreditCardSolidProps>;
export default CoreCreditCardSolid;
