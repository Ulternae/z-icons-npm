import React from 'react';

export interface LanFireFlameSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameSimpleThin: React.FC<LanFireFlameSimpleThinProps>;
export default LanFireFlameSimpleThin;
