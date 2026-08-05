import React from 'react';

export interface CoreTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTriangleSolid(props: CoreTriangleSolidProps): React.ReactElement;
export default CoreTriangleSolid;
