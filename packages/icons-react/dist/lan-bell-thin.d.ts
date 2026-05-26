import React from 'react';

export interface LanBellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellThin: React.FC<LanBellThinProps>;
export default LanBellThin;
