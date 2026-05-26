import React from 'react';

export interface LanFacePleadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePleadingSolid: React.FC<LanFacePleadingSolidProps>;
export default LanFacePleadingSolid;
