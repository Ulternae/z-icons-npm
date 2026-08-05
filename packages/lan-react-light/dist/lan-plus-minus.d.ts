import React from 'react';

export interface LanPlusMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusMinus(props: LanPlusMinusProps): React.ReactElement;
export default LanPlusMinus;
