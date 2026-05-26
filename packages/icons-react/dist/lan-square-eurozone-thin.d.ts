import React from 'react';

export interface LanSquareEurozoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEurozoneThin: React.FC<LanSquareEurozoneThinProps>;
export default LanSquareEurozoneThin;
