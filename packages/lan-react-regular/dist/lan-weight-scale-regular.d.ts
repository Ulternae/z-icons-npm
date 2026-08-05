import React from 'react';

export interface LanWeightScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightScaleRegular(props: LanWeightScaleRegularProps): React.ReactElement;
export default LanWeightScaleRegular;
