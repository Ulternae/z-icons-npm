import React from 'react';

export interface LanGalaxyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalaxyRegular: React.FC<LanGalaxyRegularProps>;
export default LanGalaxyRegular;
