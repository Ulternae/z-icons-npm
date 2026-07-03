import React from 'react';

export interface BruCcAmazonPayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcAmazonPay(props: BruCcAmazonPayProps): React.ReactElement;
export default BruCcAmazonPay;
