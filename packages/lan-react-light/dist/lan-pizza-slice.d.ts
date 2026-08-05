import React from 'react';

export interface LanPizzaSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaSlice(props: LanPizzaSliceProps): React.ReactElement;
export default LanPizzaSlice;
