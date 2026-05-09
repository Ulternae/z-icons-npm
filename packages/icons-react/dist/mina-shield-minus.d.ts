import React from 'react';

export interface MinaShieldMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldMinus: React.FC<MinaShieldMinusProps>;
export default MinaShieldMinus;
