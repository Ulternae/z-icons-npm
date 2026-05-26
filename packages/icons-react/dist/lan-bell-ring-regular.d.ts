import React from 'react';

export interface LanBellRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellRingRegular: React.FC<LanBellRingRegularProps>;
export default LanBellRingRegular;
