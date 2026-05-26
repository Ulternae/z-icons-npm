import React from 'react';

export interface LanMoonStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarRegular: React.FC<LanMoonStarRegularProps>;
export default LanMoonStarRegular;
