import React from 'react';

export interface NeoCakeCandlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCakeCandlesSolid(props: NeoCakeCandlesSolidProps): React.ReactElement;
export default NeoCakeCandlesSolid;
