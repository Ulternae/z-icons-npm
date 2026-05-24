import React from 'react';

export interface BruImdbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruImdb: React.FC<BruImdbProps>;
export default BruImdb;
