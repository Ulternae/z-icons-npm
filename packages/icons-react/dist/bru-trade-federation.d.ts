import React from 'react';

export interface BruTradeFederationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTradeFederation: React.FC<BruTradeFederationProps>;
export default BruTradeFederation;
