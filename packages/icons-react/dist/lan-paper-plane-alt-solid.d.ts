import React from 'react';

export interface LanPaperPlaneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneAltSolid: React.FC<LanPaperPlaneAltSolidProps>;
export default LanPaperPlaneAltSolid;
