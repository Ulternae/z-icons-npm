import React from 'react';

export interface BruCcAmexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcAmex: React.FC<BruCcAmexProps>;
export default BruCcAmex;
