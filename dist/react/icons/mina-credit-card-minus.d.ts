import React from 'react';

export interface MinaCreditCardMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardMinus: React.FC<MinaCreditCardMinusProps>;
export default MinaCreditCardMinus;
