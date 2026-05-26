import React from 'react';

export interface LanBarnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnRegular: React.FC<LanBarnRegularProps>;
export default LanBarnRegular;
