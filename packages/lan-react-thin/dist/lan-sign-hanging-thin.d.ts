import React from 'react';

export interface LanSignHangingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignHangingThin(props: LanSignHangingThinProps): React.ReactElement;
export default LanSignHangingThin;
