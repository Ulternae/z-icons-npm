import React from 'react';

export interface LanMinusSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusSquareThin: React.FC<LanMinusSquareThinProps>;
export default LanMinusSquareThin;
