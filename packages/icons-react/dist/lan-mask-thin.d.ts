import React from 'react';

export interface LanMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskThin: React.FC<LanMaskThinProps>;
export default LanMaskThin;
