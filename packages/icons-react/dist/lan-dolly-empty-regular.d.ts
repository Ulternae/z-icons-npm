import React from 'react';

export interface LanDollyEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyEmptyRegular: React.FC<LanDollyEmptyRegularProps>;
export default LanDollyEmptyRegular;
