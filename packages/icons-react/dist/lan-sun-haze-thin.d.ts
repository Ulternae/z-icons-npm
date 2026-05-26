import React from 'react';

export interface LanSunHazeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunHazeThin: React.FC<LanSunHazeThinProps>;
export default LanSunHazeThin;
