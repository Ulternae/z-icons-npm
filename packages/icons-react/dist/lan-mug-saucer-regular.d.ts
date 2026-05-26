import React from 'react';

export interface LanMugSaucerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugSaucerRegular: React.FC<LanMugSaucerRegularProps>;
export default LanMugSaucerRegular;
