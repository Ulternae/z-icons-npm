import React from 'react';

export interface LanPizzaSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaSliceSolid(props: LanPizzaSliceSolidProps): React.ReactElement;
export default LanPizzaSliceSolid;
