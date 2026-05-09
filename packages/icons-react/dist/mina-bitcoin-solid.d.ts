import React from 'react';

export interface MinaBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinSolid: React.FC<MinaBitcoinSolidProps>;
export default MinaBitcoinSolid;
