import React from 'react';

export interface LanGrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrate: React.FC<LanGrateProps>;
export default LanGrate;
