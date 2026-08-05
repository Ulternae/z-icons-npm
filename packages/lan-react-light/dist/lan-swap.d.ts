import React from 'react';

export interface LanSwapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwap(props: LanSwapProps): React.ReactElement;
export default LanSwap;
