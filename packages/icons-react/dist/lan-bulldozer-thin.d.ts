import React from 'react';

export interface LanBulldozerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBulldozerThin: React.FC<LanBulldozerThinProps>;
export default LanBulldozerThin;
