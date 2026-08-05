import React from 'react';

export interface LanCoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinThin(props: LanCoinThinProps): React.ReactElement;
export default LanCoinThin;
