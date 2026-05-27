import React from 'react';

export interface NeoPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlaneSolid: React.FC<NeoPlaneSolidProps>;
export default NeoPlaneSolid;
