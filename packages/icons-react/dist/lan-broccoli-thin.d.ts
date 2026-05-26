import React from 'react';

export interface LanBroccoliThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroccoliThin: React.FC<LanBroccoliThinProps>;
export default LanBroccoliThin;
