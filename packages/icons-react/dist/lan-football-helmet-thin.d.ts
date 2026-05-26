import React from 'react';

export interface LanFootballHelmetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballHelmetThin: React.FC<LanFootballHelmetThinProps>;
export default LanFootballHelmetThin;
