import React from 'react';

export interface LanDnaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDnaThin: React.FC<LanDnaThinProps>;
export default LanDnaThin;
