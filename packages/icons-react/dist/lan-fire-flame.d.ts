import React from 'react';

export interface LanFireFlameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlame: React.FC<LanFireFlameProps>;
export default LanFireFlame;
