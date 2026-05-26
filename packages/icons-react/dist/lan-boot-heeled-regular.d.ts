import React from 'react';

export interface LanBootHeeledRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootHeeledRegular: React.FC<LanBootHeeledRegularProps>;
export default LanBootHeeledRegular;
