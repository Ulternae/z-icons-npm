import React from 'react';

export interface LanPenCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenCircleThin: React.FC<LanPenCircleThinProps>;
export default LanPenCircleThin;
