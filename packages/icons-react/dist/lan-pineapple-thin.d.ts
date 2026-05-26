import React from 'react';

export interface LanPineappleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPineappleThin: React.FC<LanPineappleThinProps>;
export default LanPineappleThin;
