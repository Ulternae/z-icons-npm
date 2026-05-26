import React from 'react';

export interface LanHandPointDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointDownRegular: React.FC<LanHandPointDownRegularProps>;
export default LanHandPointDownRegular;
