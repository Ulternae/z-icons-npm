import React from 'react';

export interface LanCoinBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinBlankThin(props: LanCoinBlankThinProps): React.ReactElement;
export default LanCoinBlankThin;
