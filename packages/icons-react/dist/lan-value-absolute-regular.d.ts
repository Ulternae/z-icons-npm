import React from 'react';

export interface LanValueAbsoluteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanValueAbsoluteRegular: React.FC<LanValueAbsoluteRegularProps>;
export default LanValueAbsoluteRegular;
