import React from 'react';

export interface MinaEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuro: React.FC<MinaEuroProps>;
export default MinaEuro;
