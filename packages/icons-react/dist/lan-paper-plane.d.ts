import React from 'react';

export interface LanPaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlane: React.FC<LanPaperPlaneProps>;
export default LanPaperPlane;
