import React from 'react';

export interface LanBasketballHoopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballHoopRegular(props: LanBasketballHoopRegularProps): React.ReactElement;
export default LanBasketballHoopRegular;
