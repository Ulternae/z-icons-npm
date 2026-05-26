import React from 'react';

export interface LanHourglass3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass3Thin: React.FC<LanHourglass3ThinProps>;
export default LanHourglass3Thin;
