import React from 'react';

export interface MinaInfoTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoTriangleSolid(props: MinaInfoTriangleSolidProps): React.ReactElement;
export default MinaInfoTriangleSolid;
