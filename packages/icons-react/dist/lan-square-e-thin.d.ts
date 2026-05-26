import React from 'react';

export interface LanSquareEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEThin: React.FC<LanSquareEThinProps>;
export default LanSquareEThin;
