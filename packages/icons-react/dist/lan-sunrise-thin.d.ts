import React from 'react';

export interface LanSunriseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunriseThin: React.FC<LanSunriseThinProps>;
export default LanSunriseThin;
