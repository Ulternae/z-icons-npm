import React from 'react';

export interface BruCcStripeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcStripe(props: BruCcStripeProps): React.ReactElement;
export default BruCcStripe;
