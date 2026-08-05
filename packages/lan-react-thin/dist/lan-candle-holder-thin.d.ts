import React from 'react';

export interface LanCandleHolderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandleHolderThin(props: LanCandleHolderThinProps): React.ReactElement;
export default LanCandleHolderThin;
