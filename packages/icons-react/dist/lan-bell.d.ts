import React from 'react';

export interface LanBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBell: React.FC<LanBellProps>;
export default LanBell;
