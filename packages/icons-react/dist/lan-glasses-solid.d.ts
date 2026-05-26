import React from 'react';

export interface LanGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesSolid: React.FC<LanGlassesSolidProps>;
export default LanGlassesSolid;
