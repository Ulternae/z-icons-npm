import React from 'react';

export interface LanRvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRvRegular: React.FC<LanRvRegularProps>;
export default LanRvRegular;
