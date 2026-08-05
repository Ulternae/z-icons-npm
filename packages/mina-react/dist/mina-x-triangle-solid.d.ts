import React from 'react';

export interface MinaXTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXTriangleSolid(props: MinaXTriangleSolidProps): React.ReactElement;
export default MinaXTriangleSolid;
