import React from 'react';

export interface MinaBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoin(props: MinaBitcoinProps): React.ReactElement;
export default MinaBitcoin;
