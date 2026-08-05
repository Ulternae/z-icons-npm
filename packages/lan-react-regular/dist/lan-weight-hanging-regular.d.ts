import React from 'react';

export interface LanWeightHangingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightHangingRegular(props: LanWeightHangingRegularProps): React.ReactElement;
export default LanWeightHangingRegular;
