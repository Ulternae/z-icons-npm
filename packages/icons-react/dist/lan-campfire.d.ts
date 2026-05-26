import React from 'react';

export interface LanCampfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampfire: React.FC<LanCampfireProps>;
export default LanCampfire;
