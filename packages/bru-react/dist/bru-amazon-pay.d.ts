import React from 'react';

export interface BruAmazonPayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAmazonPay(props: BruAmazonPayProps): React.ReactElement;
export default BruAmazonPay;
