import React from 'react';

export interface LanGeminiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGeminiRegular: React.FC<LanGeminiRegularProps>;
export default LanGeminiRegular;
