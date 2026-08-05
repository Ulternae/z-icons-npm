import React from 'react';

export interface LanCartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartMinus(props: LanCartMinusProps): React.ReactElement;
export default LanCartMinus;
