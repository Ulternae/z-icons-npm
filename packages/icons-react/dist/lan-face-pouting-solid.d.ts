import React from 'react';

export interface LanFacePoutingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePoutingSolid: React.FC<LanFacePoutingSolidProps>;
export default LanFacePoutingSolid;
