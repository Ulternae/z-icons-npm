import React from 'react';

export interface LanSquareRubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRubleThin: React.FC<LanSquareRubleThinProps>;
export default LanSquareRubleThin;
