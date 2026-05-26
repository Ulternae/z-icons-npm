import React from 'react';

export interface LanFaceDroolingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDroolingSolid: React.FC<LanFaceDroolingSolidProps>;
export default LanFaceDroolingSolid;
