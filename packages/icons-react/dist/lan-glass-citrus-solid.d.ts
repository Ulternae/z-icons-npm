import React from 'react';

export interface LanGlassCitrusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCitrusSolid: React.FC<LanGlassCitrusSolidProps>;
export default LanGlassCitrusSolid;
