import React from 'react';

export interface BruStackExchangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStackExchange(props: BruStackExchangeProps): React.ReactElement;
export default BruStackExchange;
