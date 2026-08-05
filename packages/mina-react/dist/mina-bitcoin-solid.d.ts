import React from 'react';

export interface MinaBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinSolid(props: MinaBitcoinSolidProps): React.ReactElement;
export default MinaBitcoinSolid;
