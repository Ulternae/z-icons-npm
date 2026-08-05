import React from 'react';

export interface LanCoinFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinFrontThin(props: LanCoinFrontThinProps): React.ReactElement;
export default LanCoinFrontThin;
