import React from 'react';

export interface LanSquareDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDRegular: React.FC<LanSquareDRegularProps>;
export default LanSquareDRegular;
