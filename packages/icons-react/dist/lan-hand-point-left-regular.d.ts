import React from 'react';

export interface LanHandPointLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointLeftRegular: React.FC<LanHandPointLeftRegularProps>;
export default LanHandPointLeftRegular;
