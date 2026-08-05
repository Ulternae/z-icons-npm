import React from 'react';

export interface LanCoinVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinVerticalRegular(props: LanCoinVerticalRegularProps): React.ReactElement;
export default LanCoinVerticalRegular;
