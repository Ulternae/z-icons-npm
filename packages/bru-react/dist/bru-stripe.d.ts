import React from 'react';

export interface BruStripeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStripe(props: BruStripeProps): React.ReactElement;
export default BruStripe;
