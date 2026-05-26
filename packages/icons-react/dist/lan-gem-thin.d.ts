import React from 'react';

export interface LanGemThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGemThin: React.FC<LanGemThinProps>;
export default LanGemThin;
