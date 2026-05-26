import React from 'react';

export interface LanBorderNoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderNoneRegular: React.FC<LanBorderNoneRegularProps>;
export default LanBorderNoneRegular;
