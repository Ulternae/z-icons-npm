import React from 'react';

export interface LanSquareTengeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTengeThin: React.FC<LanSquareTengeThinProps>;
export default LanSquareTengeThin;
