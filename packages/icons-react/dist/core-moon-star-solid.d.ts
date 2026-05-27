import React from 'react';

export interface CoreMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoonStarSolid: React.FC<CoreMoonStarSolidProps>;
export default CoreMoonStarSolid;
