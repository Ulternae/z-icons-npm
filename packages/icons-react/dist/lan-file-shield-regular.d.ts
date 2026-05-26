import React from 'react';

export interface LanFileShieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileShieldRegular: React.FC<LanFileShieldRegularProps>;
export default LanFileShieldRegular;
