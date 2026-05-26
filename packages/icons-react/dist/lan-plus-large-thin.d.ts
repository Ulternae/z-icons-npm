import React from 'react';

export interface LanPlusLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusLargeThin: React.FC<LanPlusLargeThinProps>;
export default LanPlusLargeThin;
