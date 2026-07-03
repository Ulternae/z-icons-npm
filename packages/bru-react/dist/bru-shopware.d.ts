import React from 'react';

export interface BruShopwareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruShopware(props: BruShopwareProps): React.ReactElement;
export default BruShopware;
