import React from 'react';

export interface LanLuchadorMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLuchadorMaskThin: React.FC<LanLuchadorMaskThinProps>;
export default LanLuchadorMaskThin;
