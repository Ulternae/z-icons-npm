import React from 'react';

export interface LanGeminiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGeminiThin: React.FC<LanGeminiThinProps>;
export default LanGeminiThin;
