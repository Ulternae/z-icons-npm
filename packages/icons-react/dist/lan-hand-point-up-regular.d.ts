import React from 'react';

export interface LanHandPointUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointUpRegular: React.FC<LanHandPointUpRegularProps>;
export default LanHandPointUpRegular;
