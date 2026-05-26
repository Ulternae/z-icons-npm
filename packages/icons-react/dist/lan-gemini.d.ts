import React from 'react';

export interface LanGeminiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGemini: React.FC<LanGeminiProps>;
export default LanGemini;
