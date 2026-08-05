import React from 'react';

export interface LanWeightScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightScaleThin(props: LanWeightScaleThinProps): React.ReactElement;
export default LanWeightScaleThin;
