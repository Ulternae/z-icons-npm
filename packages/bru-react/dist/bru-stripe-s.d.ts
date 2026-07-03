import React from 'react';

export interface BruStripeSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStripeS(props: BruStripeSProps): React.ReactElement;
export default BruStripeS;
