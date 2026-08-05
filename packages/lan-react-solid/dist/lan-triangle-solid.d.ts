import React from 'react';

export interface LanTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleSolid(props: LanTriangleSolidProps): React.ReactElement;
export default LanTriangleSolid;
