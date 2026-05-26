import React from 'react';

export interface LanFaceSalutingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSalutingSolid: React.FC<LanFaceSalutingSolidProps>;
export default LanFaceSalutingSolid;
