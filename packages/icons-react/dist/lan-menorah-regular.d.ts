import React from 'react';

export interface LanMenorahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMenorahRegular: React.FC<LanMenorahRegularProps>;
export default LanMenorahRegular;
