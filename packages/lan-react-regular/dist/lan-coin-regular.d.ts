import React from 'react';

export interface LanCoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinRegular(props: LanCoinRegularProps): React.ReactElement;
export default LanCoinRegular;
