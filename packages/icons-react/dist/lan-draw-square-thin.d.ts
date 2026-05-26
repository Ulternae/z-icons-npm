import React from 'react';

export interface LanDrawSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawSquareThin: React.FC<LanDrawSquareThinProps>;
export default LanDrawSquareThin;
