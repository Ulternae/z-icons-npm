import React from 'react';

export interface NeoPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlaneSolid(props: NeoPlaneSolidProps): React.ReactElement;
export default NeoPlaneSolid;
