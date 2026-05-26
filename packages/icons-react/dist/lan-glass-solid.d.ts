import React from 'react';

export interface LanGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassSolid: React.FC<LanGlassSolidProps>;
export default LanGlassSolid;
