import React from 'react';

export interface LanPaperPlaneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneAltThin: React.FC<LanPaperPlaneAltThinProps>;
export default LanPaperPlaneAltThin;
