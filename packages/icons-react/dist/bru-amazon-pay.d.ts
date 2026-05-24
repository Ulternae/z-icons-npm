import React from 'react';

export interface BruAmazonPayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAmazonPay: React.FC<BruAmazonPayProps>;
export default BruAmazonPay;
