import React from 'react';

export interface LanMagnifyingGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassThin: React.FC<LanMagnifyingGlassThinProps>;
export default LanMagnifyingGlassThin;
