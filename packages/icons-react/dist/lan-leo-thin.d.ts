import React from 'react';

export interface LanLeoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeoThin: React.FC<LanLeoThinProps>;
export default LanLeoThin;
