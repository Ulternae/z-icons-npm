import React from 'react';

export interface LanGrapesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrapesThin: React.FC<LanGrapesThinProps>;
export default LanGrapesThin;
