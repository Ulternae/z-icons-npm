import React from 'react';

export interface LanBThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBThin: React.FC<LanBThinProps>;
export default LanBThin;
