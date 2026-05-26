import React from 'react';

export interface LanOmegaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmegaThin: React.FC<LanOmegaThinProps>;
export default LanOmegaThin;
