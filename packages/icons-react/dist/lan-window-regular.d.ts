import React from 'react';

export interface LanWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowRegular: React.FC<LanWindowRegularProps>;
export default LanWindowRegular;
