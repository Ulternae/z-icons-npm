import React from 'react';

export interface LanBellOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellOnRegular: React.FC<LanBellOnRegularProps>;
export default LanBellOnRegular;
