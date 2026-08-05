import React from 'react';

export interface LanCoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoin(props: LanCoinProps): React.ReactElement;
export default LanCoin;
