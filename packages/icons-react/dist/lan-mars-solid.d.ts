import React from 'react';

export interface LanMarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsSolid: React.FC<LanMarsSolidProps>;
export default LanMarsSolid;
