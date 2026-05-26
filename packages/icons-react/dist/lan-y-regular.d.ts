import React from 'react';

export interface LanYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYRegular: React.FC<LanYRegularProps>;
export default LanYRegular;
