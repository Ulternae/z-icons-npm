import React from 'react';

export interface BruShopifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruShopify: React.FC<BruShopifyProps>;
export default BruShopify;
