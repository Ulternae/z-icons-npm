import React from 'react';

export interface LanIceCreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceCream(props: LanIceCreamProps): React.ReactElement;
export default LanIceCream;
