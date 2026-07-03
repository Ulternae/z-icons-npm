import React from 'react';

export interface BruAmazonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAmazon(props: BruAmazonProps): React.ReactElement;
export default BruAmazon;
