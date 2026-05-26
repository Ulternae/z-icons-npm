import React from 'react';

export interface LanBarProgressEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressEmptyRegular: React.FC<LanBarProgressEmptyRegularProps>;
export default LanBarProgressEmptyRegular;
