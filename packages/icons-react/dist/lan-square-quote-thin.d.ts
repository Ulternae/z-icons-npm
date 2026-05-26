import React from 'react';

export interface LanSquareQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuoteThin: React.FC<LanSquareQuoteThinProps>;
export default LanSquareQuoteThin;
