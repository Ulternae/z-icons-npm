import React from 'react';

export interface LanUserMdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdRegular: React.FC<LanUserMdRegularProps>;
export default LanUserMdRegular;
