import React from 'react';

export interface LanFileJsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJsThin: React.FC<LanFileJsThinProps>;
export default LanFileJsThin;
