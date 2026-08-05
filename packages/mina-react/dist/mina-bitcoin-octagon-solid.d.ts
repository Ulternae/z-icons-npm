import React from 'react';

export interface MinaBitcoinOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinOctagonSolid(props: MinaBitcoinOctagonSolidProps): React.ReactElement;
export default MinaBitcoinOctagonSolid;
