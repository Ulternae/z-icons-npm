import React from 'react';

export interface LanCodeSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeSimpleThin: React.FC<LanCodeSimpleThinProps>;
export default LanCodeSimpleThin;
