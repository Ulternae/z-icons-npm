import React from 'react';

export interface LanMedalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMedalRegular: React.FC<LanMedalRegularProps>;
export default LanMedalRegular;
