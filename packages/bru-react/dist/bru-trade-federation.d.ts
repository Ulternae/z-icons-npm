import React from 'react';

export interface BruTradeFederationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTradeFederation(props: BruTradeFederationProps): React.ReactElement;
export default BruTradeFederation;
