import React from 'react';

export interface LanFileGifSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileGifSolid: React.FC<LanFileGifSolidProps>;
export default LanFileGifSolid;
