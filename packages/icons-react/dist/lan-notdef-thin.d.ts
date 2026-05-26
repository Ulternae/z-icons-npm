import React from 'react';

export interface LanNotdefThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotdefThin: React.FC<LanNotdefThinProps>;
export default LanNotdefThin;
