import React from 'react';

export interface LanGlassCitrusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCitrusThin: React.FC<LanGlassCitrusThinProps>;
export default LanGlassCitrusThin;
