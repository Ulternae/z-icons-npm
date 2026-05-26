import React from 'react';

export interface LanFaceMeltingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMeltingSolid: React.FC<LanFaceMeltingSolidProps>;
export default LanFaceMeltingSolid;
