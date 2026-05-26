import React from 'react';

export interface LanBugsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugsRegular: React.FC<LanBugsRegularProps>;
export default LanBugsRegular;
