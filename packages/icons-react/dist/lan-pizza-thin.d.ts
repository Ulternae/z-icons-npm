import React from 'react';

export interface LanPizzaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaThin: React.FC<LanPizzaThinProps>;
export default LanPizzaThin;
