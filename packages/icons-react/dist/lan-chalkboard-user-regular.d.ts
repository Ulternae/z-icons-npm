import React from 'react';

export interface LanChalkboardUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChalkboardUserRegular: React.FC<LanChalkboardUserRegularProps>;
export default LanChalkboardUserRegular;
