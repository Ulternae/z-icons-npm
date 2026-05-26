import React from 'react';

export interface LanBellOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellOnThin: React.FC<LanBellOnThinProps>;
export default LanBellOnThin;
