import React from 'react';

export interface LanCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsSolid: React.FC<LanCardsSolidProps>;
export default LanCardsSolid;
