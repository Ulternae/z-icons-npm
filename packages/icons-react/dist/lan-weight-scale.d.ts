import React from 'react';

export interface LanWeightScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightScale: React.FC<LanWeightScaleProps>;
export default LanWeightScale;
