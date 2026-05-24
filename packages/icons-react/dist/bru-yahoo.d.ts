import React from 'react';

export interface BruYahooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYahoo: React.FC<BruYahooProps>;
export default BruYahoo;
