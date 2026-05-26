import React from 'react';

export interface LanBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsSolid: React.FC<LanBarsSolidProps>;
export default LanBarsSolid;
