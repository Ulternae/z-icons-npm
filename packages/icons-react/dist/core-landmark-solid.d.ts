import React from 'react';

export interface CoreLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmarkSolid: React.FC<CoreLandmarkSolidProps>;
export default CoreLandmarkSolid;
