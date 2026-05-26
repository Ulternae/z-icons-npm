import React from 'react';

export interface LanBorderOuterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderOuterRegular: React.FC<LanBorderOuterRegularProps>;
export default LanBorderOuterRegular;
