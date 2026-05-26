import React from 'react';

export interface LanArrowsToDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDotRegular: React.FC<LanArrowsToDotRegularProps>;
export default LanArrowsToDotRegular;
