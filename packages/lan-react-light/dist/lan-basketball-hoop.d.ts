import React from 'react';

export interface LanBasketballHoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketballHoop(props: LanBasketballHoopProps): React.ReactElement;
export default LanBasketballHoop;
