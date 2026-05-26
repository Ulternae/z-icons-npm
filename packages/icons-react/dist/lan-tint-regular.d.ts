import React from 'react';

export interface LanTintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTintRegular: React.FC<LanTintRegularProps>;
export default LanTintRegular;
