import React from 'react';

export interface LanPizzaSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaSliceRegular(props: LanPizzaSliceRegularProps): React.ReactElement;
export default LanPizzaSliceRegular;
