import React from 'react';

export interface LanHourglass1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass1Thin: React.FC<LanHourglass1ThinProps>;
export default LanHourglass1Thin;
