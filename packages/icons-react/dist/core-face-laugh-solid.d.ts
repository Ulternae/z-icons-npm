import React from 'react';

export interface CoreFaceLaughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceLaughSolid: React.FC<CoreFaceLaughSolidProps>;
export default CoreFaceLaughSolid;
