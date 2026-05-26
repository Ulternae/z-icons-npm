import React from 'react';

export interface LanMugSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugSaucerSolid: React.FC<LanMugSaucerSolidProps>;
export default LanMugSaucerSolid;
