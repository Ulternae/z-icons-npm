import React from 'react';

export interface LanBellConciergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellConciergeRegular: React.FC<LanBellConciergeRegularProps>;
export default LanBellConciergeRegular;
