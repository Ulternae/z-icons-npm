import React from 'react';

export interface CorePlaneUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlaneUpSolid(props: CorePlaneUpSolidProps): React.ReactElement;
export default CorePlaneUpSolid;
