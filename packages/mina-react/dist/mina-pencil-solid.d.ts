import React from 'react';

export interface MinaPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPencilSolid(props: MinaPencilSolidProps): React.ReactElement;
export default MinaPencilSolid;
