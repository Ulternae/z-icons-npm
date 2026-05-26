import React from 'react';

export interface LanSquareRupeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupeeThin: React.FC<LanSquareRupeeThinProps>;
export default LanSquareRupeeThin;
