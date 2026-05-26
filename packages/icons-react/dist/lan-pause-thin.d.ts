import React from 'react';

export interface LanPauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPauseThin: React.FC<LanPauseThinProps>;
export default LanPauseThin;
