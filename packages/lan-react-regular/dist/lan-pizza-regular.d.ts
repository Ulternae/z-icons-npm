import React from 'react';

export interface LanPizzaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaRegular(props: LanPizzaRegularProps): React.ReactElement;
export default LanPizzaRegular;
