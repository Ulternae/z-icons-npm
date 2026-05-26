import React from 'react';

export interface LanGeminiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGeminiSolid: React.FC<LanGeminiSolidProps>;
export default LanGeminiSolid;
