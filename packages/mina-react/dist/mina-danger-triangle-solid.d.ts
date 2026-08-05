import React from 'react';

export interface MinaDangerTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerTriangleSolid(props: MinaDangerTriangleSolidProps): React.ReactElement;
export default MinaDangerTriangleSolid;
