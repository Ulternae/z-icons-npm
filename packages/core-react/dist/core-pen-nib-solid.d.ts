import React from 'react';

export interface CorePenNibSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenNibSolid(props: CorePenNibSolidProps): React.ReactElement;
export default CorePenNibSolid;
