import React from 'react';

export interface LanPresentationScreenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPresentationScreenThin: React.FC<LanPresentationScreenThinProps>;
export default LanPresentationScreenThin;
