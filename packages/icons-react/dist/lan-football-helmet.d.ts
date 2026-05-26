import React from 'react';

export interface LanFootballHelmetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballHelmet: React.FC<LanFootballHelmetProps>;
export default LanFootballHelmet;
