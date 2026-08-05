import React from 'react';

export interface LanIceCreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceCreamSolid(props: LanIceCreamSolidProps): React.ReactElement;
export default LanIceCreamSolid;
