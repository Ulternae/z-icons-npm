import React from 'react';

export interface BruBuyNLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBuyNLarge(props: BruBuyNLargeProps): React.ReactElement;
export default BruBuyNLarge;
