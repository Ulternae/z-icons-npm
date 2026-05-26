import React from 'react';

export interface LanHomeUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeUserRegular: React.FC<LanHomeUserRegularProps>;
export default LanHomeUserRegular;
