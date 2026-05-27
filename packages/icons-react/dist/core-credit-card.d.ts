import React from 'react';

export interface CoreCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCreditCard: React.FC<CoreCreditCardProps>;
export default CoreCreditCard;
