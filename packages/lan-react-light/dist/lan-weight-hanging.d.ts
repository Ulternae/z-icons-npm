import React from 'react';

export interface LanWeightHangingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightHanging(props: LanWeightHangingProps): React.ReactElement;
export default LanWeightHanging;
