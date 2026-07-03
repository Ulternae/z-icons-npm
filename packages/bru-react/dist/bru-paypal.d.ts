import React from 'react';

export interface BruPaypalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPaypal(props: BruPaypalProps): React.ReactElement;
export default BruPaypal;
