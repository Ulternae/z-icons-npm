import React from 'react';

export interface LanSquareTugrikThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTugrikThin: React.FC<LanSquareTugrikThinProps>;
export default LanSquareTugrikThin;
