import React from 'react';

export interface LanBadgeCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeCheckRegular: React.FC<LanBadgeCheckRegularProps>;
export default LanBadgeCheckRegular;
