import React from 'react';

export interface LanPresentationScreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPresentationScreenSolid: React.FC<LanPresentationScreenSolidProps>;
export default LanPresentationScreenSolid;
