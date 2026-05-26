import React from 'react';

export interface LanHelmetUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetUnRegular: React.FC<LanHelmetUnRegularProps>;
export default LanHelmetUnRegular;
