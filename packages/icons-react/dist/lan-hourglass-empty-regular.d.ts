import React from 'react';

export interface LanHourglassEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassEmptyRegular: React.FC<LanHourglassEmptyRegularProps>;
export default LanHourglassEmptyRegular;
