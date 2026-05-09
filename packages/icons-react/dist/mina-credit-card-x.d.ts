import React from 'react';

export interface MinaCreditCardXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardX: React.FC<MinaCreditCardXProps>;
export default MinaCreditCardX;
