import React from 'react';

export interface LanBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryThin: React.FC<LanBinaryThinProps>;
export default LanBinaryThin;
