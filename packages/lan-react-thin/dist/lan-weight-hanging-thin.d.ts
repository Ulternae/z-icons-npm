import React from 'react';

export interface LanWeightHangingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightHangingThin(props: LanWeightHangingThinProps): React.ReactElement;
export default LanWeightHangingThin;
