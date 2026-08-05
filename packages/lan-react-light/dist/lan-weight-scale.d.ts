import React from 'react';

export interface LanWeightScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightScale(props: LanWeightScaleProps): React.ReactElement;
export default LanWeightScale;
