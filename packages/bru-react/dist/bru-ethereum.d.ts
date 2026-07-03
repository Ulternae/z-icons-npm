import React from 'react';

export interface BruEthereumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEthereum(props: BruEthereumProps): React.ReactElement;
export default BruEthereum;
