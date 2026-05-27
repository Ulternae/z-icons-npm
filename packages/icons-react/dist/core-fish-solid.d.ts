import React from 'react';

export interface CoreFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFishSolid: React.FC<CoreFishSolidProps>;
export default CoreFishSolid;
