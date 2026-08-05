import React from 'react';

export interface LanSwapArrowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwapArrowsThin(props: LanSwapArrowsThinProps): React.ReactElement;
export default LanSwapArrowsThin;
