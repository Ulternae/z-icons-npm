import React from 'react';

export interface MinaTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTriangleSolid(props: MinaTriangleSolidProps): React.ReactElement;
export default MinaTriangleSolid;
