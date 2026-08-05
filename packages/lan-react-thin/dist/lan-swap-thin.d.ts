import React from 'react';

export interface LanSwapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwapThin(props: LanSwapThinProps): React.ReactElement;
export default LanSwapThin;
