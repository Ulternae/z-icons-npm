import React from 'react';

export interface LanHamsaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHamsaThin: React.FC<LanHamsaThinProps>;
export default LanHamsaThin;
