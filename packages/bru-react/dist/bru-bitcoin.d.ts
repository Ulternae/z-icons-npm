import React from 'react';

export interface BruBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBitcoin(props: BruBitcoinProps): React.ReactElement;
export default BruBitcoin;
