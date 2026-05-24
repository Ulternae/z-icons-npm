import React from 'react';

export interface BruStackExchangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStackExchange: React.FC<BruStackExchangeProps>;
export default BruStackExchange;
