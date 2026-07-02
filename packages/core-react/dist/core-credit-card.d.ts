import React from 'react';

export interface CoreCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCreditCard(props: CoreCreditCardProps): React.ReactElement;
export default CoreCreditCard;
