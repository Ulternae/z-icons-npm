import React from 'react';

export interface LanHourglassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassEmpty: React.FC<LanHourglassEmptyProps>;
export default LanHourglassEmpty;
