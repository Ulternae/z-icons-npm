import React from 'react';

export interface LanGlassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesThin: React.FC<LanGlassesThinProps>;
export default LanGlassesThin;
