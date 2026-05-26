import React from 'react';

export interface LanLocationCrosshairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationCrosshairsSolid: React.FC<LanLocationCrosshairsSolidProps>;
export default LanLocationCrosshairsSolid;
