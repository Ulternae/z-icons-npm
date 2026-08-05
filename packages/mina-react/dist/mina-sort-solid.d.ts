import React from 'react';

export interface MinaSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSortSolid(props: MinaSortSolidProps): React.ReactElement;
export default MinaSortSolid;
