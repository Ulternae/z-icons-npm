import React from 'react';

export interface LanBurritoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurritoThin: React.FC<LanBurritoThinProps>;
export default LanBurritoThin;
