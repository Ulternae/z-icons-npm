import React from 'react';

export interface LanWeightHangingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightHanging: React.FC<LanWeightHangingProps>;
export default LanWeightHanging;
