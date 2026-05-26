import React from 'react';

export interface LanHelmetUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetUnThin: React.FC<LanHelmetUnThinProps>;
export default LanHelmetUnThin;
