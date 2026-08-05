import React from 'react';

export interface CoreLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLandmarkSolid(props: CoreLandmarkSolidProps): React.ReactElement;
export default CoreLandmarkSolid;
