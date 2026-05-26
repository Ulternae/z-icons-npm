import React from 'react';

export interface LanWhiskeyGlassIceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhiskeyGlassIce: React.FC<LanWhiskeyGlassIceProps>;
export default LanWhiskeyGlassIce;
