import React from 'react';

export interface CoreFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceMehSolid: React.FC<CoreFaceMehSolidProps>;
export default CoreFaceMehSolid;
