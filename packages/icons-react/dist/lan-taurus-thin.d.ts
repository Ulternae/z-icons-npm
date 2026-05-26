import React from 'react';

export interface LanTaurusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaurusThin: React.FC<LanTaurusThinProps>;
export default LanTaurusThin;
