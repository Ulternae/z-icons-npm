import React from 'react';

export interface LanPipeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeThin: React.FC<LanPipeThinProps>;
export default LanPipeThin;
