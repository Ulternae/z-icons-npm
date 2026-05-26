import React from 'react';

export interface LanPaperPlaneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneAlt: React.FC<LanPaperPlaneAltProps>;
export default LanPaperPlaneAlt;
