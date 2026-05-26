import React from 'react';

export interface LanFileMagnifyingGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMagnifyingGlassThin: React.FC<LanFileMagnifyingGlassThinProps>;
export default LanFileMagnifyingGlassThin;
