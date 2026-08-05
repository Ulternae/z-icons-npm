import React from 'react';

export interface NeoTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTriangleSolid(props: NeoTriangleSolidProps): React.ReactElement;
export default NeoTriangleSolid;
