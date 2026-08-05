import React from 'react';

export interface MinaCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCard(props: MinaCreditCardProps): React.ReactElement;
export default MinaCreditCard;
