import React from 'react';

export interface LanCitrusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusSolid: React.FC<LanCitrusSolidProps>;
export default LanCitrusSolid;
