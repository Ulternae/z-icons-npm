import React from 'react';

export interface BruEbayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEbay: React.FC<BruEbayProps>;
export default BruEbay;
