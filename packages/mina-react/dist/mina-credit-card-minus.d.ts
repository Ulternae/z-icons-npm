import React from 'react';

export interface MinaCreditCardMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardMinus(props: MinaCreditCardMinusProps): React.ReactElement;
export default MinaCreditCardMinus;
