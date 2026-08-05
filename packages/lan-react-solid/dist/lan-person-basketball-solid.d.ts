import React from 'react';

export interface LanPersonBasketballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBasketballSolid(props: LanPersonBasketballSolidProps): React.ReactElement;
export default LanPersonBasketballSolid;
