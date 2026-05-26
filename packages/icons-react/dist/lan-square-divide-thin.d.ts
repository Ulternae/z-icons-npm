import React from 'react';

export interface LanSquareDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDivideThin: React.FC<LanSquareDivideThinProps>;
export default LanSquareDivideThin;
