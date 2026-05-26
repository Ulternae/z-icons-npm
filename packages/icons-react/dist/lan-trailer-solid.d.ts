import React from 'react';

export interface LanTrailerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrailerSolid: React.FC<LanTrailerSolidProps>;
export default LanTrailerSolid;
