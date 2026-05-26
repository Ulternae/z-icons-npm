import React from 'react';

export interface LanUserGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupRegular: React.FC<LanUserGroupRegularProps>;
export default LanUserGroupRegular;
