import React from 'react';

export interface CoreLandmarkDomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLandmarkDomeSolid(props: CoreLandmarkDomeSolidProps): React.ReactElement;
export default CoreLandmarkDomeSolid;
