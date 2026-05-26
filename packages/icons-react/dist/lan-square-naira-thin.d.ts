import React from 'react';

export interface LanSquareNairaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNairaThin: React.FC<LanSquareNairaThinProps>;
export default LanSquareNairaThin;
