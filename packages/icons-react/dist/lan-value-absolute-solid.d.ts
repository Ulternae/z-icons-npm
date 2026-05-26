import React from 'react';

export interface LanValueAbsoluteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanValueAbsoluteSolid: React.FC<LanValueAbsoluteSolidProps>;
export default LanValueAbsoluteSolid;
