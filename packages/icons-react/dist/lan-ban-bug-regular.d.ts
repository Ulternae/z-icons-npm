import React from 'react';

export interface LanBanBugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanBugRegular: React.FC<LanBanBugRegularProps>;
export default LanBanBugRegular;
