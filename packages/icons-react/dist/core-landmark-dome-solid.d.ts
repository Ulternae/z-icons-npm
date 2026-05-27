import React from 'react';

export interface CoreLandmarkDomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmarkDomeSolid: React.FC<CoreLandmarkDomeSolidProps>;
export default CoreLandmarkDomeSolid;
