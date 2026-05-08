import React from 'react';

export interface MinaCartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartMinus: React.FC<MinaCartMinusProps>;
export default MinaCartMinus;
