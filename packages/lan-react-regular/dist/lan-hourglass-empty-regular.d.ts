import React from 'react';

export interface LanHourglassEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassEmptyRegular(props: LanHourglassEmptyRegularProps): React.ReactElement;
export default LanHourglassEmptyRegular;
