import React from 'react';

export interface LanSquareDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedRegular: React.FC<LanSquareDashedRegularProps>;
export default LanSquareDashedRegular;
