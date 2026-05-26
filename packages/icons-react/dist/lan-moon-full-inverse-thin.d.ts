import React from 'react';

export interface LanMoonFullInverseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonFullInverseThin: React.FC<LanMoonFullInverseThinProps>;
export default LanMoonFullInverseThin;
