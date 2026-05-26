import React from 'react';

export interface LanHelmetUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetUn: React.FC<LanHelmetUnProps>;
export default LanHelmetUn;
