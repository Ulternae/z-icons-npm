import React from 'react';

export interface LanStethoscopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStethoscopeSolid: React.FC<LanStethoscopeSolidProps>;
export default LanStethoscopeSolid;
