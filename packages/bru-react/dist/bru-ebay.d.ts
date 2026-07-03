import React from 'react';

export interface BruEbayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEbay(props: BruEbayProps): React.ReactElement;
export default BruEbay;
