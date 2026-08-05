import React from 'react';

export interface NeoCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCreditCard(props: NeoCreditCardProps): React.ReactElement;
export default NeoCreditCard;
