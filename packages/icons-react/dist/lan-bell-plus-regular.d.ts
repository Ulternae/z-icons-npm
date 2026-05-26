import React from 'react';

export interface LanBellPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellPlusRegular: React.FC<LanBellPlusRegularProps>;
export default LanBellPlusRegular;
