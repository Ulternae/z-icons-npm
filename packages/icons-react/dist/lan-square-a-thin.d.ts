import React from 'react';

export interface LanSquareAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAThin: React.FC<LanSquareAThinProps>;
export default LanSquareAThin;
