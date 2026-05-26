import React from 'react';

export interface LanPenLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenLineThin: React.FC<LanPenLineThinProps>;
export default LanPenLineThin;
