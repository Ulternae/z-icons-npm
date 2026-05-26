import React from 'react';

export interface LanGifSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGifSolid: React.FC<LanGifSolidProps>;
export default LanGifSolid;
