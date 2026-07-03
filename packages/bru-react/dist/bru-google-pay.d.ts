import React from 'react';

export interface BruGooglePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGooglePay(props: BruGooglePayProps): React.ReactElement;
export default BruGooglePay;
