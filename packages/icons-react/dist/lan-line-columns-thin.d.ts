import React from 'react';

export interface LanLineColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineColumnsThin: React.FC<LanLineColumnsThinProps>;
export default LanLineColumnsThin;
