import React from 'react';

export interface LanHourglass2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass2Thin: React.FC<LanHourglass2ThinProps>;
export default LanHourglass2Thin;
