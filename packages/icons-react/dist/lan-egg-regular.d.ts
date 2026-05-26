import React from 'react';

export interface LanEggRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggRegular: React.FC<LanEggRegularProps>;
export default LanEggRegular;
