import React from 'react';

export interface LanFrancSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrancSignRegular: React.FC<LanFrancSignRegularProps>;
export default LanFrancSignRegular;
