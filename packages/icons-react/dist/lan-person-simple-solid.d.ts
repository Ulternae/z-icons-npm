import React from 'react';

export interface LanPersonSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSimpleSolid: React.FC<LanPersonSimpleSolidProps>;
export default LanPersonSimpleSolid;
