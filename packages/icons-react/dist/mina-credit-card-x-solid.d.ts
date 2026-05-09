import React from 'react';

export interface MinaCreditCardXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardXSolid: React.FC<MinaCreditCardXSolidProps>;
export default MinaCreditCardXSolid;
