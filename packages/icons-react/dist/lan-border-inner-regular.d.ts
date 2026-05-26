import React from 'react';

export interface LanBorderInnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderInnerRegular: React.FC<LanBorderInnerRegularProps>;
export default LanBorderInnerRegular;
