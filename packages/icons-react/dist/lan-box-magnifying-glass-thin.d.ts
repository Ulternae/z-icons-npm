import React from 'react';

export interface LanBoxMagnifyingGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxMagnifyingGlassThin: React.FC<LanBoxMagnifyingGlassThinProps>;
export default LanBoxMagnifyingGlassThin;
