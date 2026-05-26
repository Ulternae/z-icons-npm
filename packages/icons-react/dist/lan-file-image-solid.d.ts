import React from 'react';

export interface LanFileImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileImageSolid: React.FC<LanFileImageSolidProps>;
export default LanFileImageSolid;
