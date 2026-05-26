import React from 'react';

export interface LanBracketsSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsSquareThin: React.FC<LanBracketsSquareThinProps>;
export default LanBracketsSquareThin;
