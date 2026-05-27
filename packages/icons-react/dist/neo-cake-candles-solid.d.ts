import React from 'react';

export interface NeoCakeCandlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCakeCandlesSolid: React.FC<NeoCakeCandlesSolidProps>;
export default NeoCakeCandlesSolid;
