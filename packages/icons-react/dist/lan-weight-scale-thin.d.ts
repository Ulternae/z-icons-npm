import React from 'react';

export interface LanWeightScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightScaleThin: React.FC<LanWeightScaleThinProps>;
export default LanWeightScaleThin;
