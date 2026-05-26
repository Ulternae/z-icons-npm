import React from 'react';

export interface LanWhiskeyGlassIceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhiskeyGlassIceSolid: React.FC<LanWhiskeyGlassIceSolidProps>;
export default LanWhiskeyGlassIceSolid;
