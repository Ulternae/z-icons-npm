import React from 'react';

export interface LanCrosshairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsSolid: React.FC<LanCrosshairsSolidProps>;
export default LanCrosshairsSolid;
