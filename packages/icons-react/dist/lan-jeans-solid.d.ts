import React from 'react';

export interface LanJeansSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansSolid: React.FC<LanJeansSolidProps>;
export default LanJeansSolid;
