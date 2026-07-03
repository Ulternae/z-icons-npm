import React from 'react';

export interface BruShopifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruShopify(props: BruShopifyProps): React.ReactElement;
export default BruShopify;
