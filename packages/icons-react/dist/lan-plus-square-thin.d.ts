import React from 'react';

export interface LanPlusSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusSquareThin: React.FC<LanPlusSquareThinProps>;
export default LanPlusSquareThin;
