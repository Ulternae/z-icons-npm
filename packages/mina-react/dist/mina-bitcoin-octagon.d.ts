import React from 'react';

export interface MinaBitcoinOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinOctagon(props: MinaBitcoinOctagonProps): React.ReactElement;
export default MinaBitcoinOctagon;
