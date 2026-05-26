import React from 'react';

export interface LanVenusMarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusMarsSolid: React.FC<LanVenusMarsSolidProps>;
export default LanVenusMarsSolid;
