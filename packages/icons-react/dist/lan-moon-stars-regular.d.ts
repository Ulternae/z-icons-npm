import React from 'react';

export interface LanMoonStarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarsRegular: React.FC<LanMoonStarsRegularProps>;
export default LanMoonStarsRegular;
