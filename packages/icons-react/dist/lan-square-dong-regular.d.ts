import React from 'react';

export interface LanSquareDongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDongRegular: React.FC<LanSquareDongRegularProps>;
export default LanSquareDongRegular;
