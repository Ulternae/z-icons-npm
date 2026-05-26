import React from 'react';

export interface LanFileOdfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileOdfRegular: React.FC<LanFileOdfRegularProps>;
export default LanFileOdfRegular;
