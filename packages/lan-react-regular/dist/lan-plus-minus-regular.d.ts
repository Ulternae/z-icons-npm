import React from 'react';

export interface LanPlusMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusMinusRegular(props: LanPlusMinusRegularProps): React.ReactElement;
export default LanPlusMinusRegular;
