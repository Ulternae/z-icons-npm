import React from 'react';

export interface LanBellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellRegular: React.FC<LanBellRegularProps>;
export default LanBellRegular;
