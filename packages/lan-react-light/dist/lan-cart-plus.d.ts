import React from 'react';

export interface LanCartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartPlus(props: LanCartPlusProps): React.ReactElement;
export default LanCartPlus;
