import React from 'react';

export interface BruCcAmazonPayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcAmazonPay: React.FC<BruCcAmazonPayProps>;
export default BruCcAmazonPay;
