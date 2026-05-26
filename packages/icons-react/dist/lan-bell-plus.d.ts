import React from 'react';

export interface LanBellPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellPlus: React.FC<LanBellPlusProps>;
export default LanBellPlus;
