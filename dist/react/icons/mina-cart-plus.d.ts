import React from 'react';

export interface MinaCartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartPlus: React.FC<MinaCartPlusProps>;
export default MinaCartPlus;
