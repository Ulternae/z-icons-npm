import React from 'react';

export interface LanFaceLyingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLyingSolid: React.FC<LanFaceLyingSolidProps>;
export default LanFaceLyingSolid;
