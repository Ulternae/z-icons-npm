import React from 'react';

export interface BruCcPaypalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcPaypal(props: BruCcPaypalProps): React.ReactElement;
export default BruCcPaypal;
