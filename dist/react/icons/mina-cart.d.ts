import React from 'react';

export interface MinaCartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCart: React.FC<MinaCartProps>;
export default MinaCart;
