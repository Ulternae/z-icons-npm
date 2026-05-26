import React from 'react';

export interface LanTrailerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrailer: React.FC<LanTrailerProps>;
export default LanTrailer;
