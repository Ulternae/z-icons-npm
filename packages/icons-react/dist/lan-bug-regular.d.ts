import React from 'react';

export interface LanBugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugRegular: React.FC<LanBugRegularProps>;
export default LanBugRegular;
