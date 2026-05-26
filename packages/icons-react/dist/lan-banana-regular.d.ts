import React from 'react';

export interface LanBananaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBananaRegular: React.FC<LanBananaRegularProps>;
export default LanBananaRegular;
