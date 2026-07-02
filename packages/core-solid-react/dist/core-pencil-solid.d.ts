import React from 'react';

export interface CorePencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencilSolid(props: CorePencilSolidProps): React.ReactElement;
export default CorePencilSolid;
