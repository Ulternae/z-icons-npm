import React from 'react';

export interface LanUserGroupSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupSimpleRegular: React.FC<LanUserGroupSimpleRegularProps>;
export default LanUserGroupSimpleRegular;
