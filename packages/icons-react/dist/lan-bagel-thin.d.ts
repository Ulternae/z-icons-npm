import React from 'react';

export interface LanBagelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagelThin: React.FC<LanBagelThinProps>;
export default LanBagelThin;
