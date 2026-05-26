import React from 'react';

export interface LanVialsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialsSolid: React.FC<LanVialsSolidProps>;
export default LanVialsSolid;
