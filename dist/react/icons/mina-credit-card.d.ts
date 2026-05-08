import React from 'react';

export interface MinaCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCard: React.FC<MinaCreditCardProps>;
export default MinaCreditCard;
