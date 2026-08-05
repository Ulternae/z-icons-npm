import React from 'react';

export interface NeoPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPencilSolid(props: NeoPencilSolidProps): React.ReactElement;
export default NeoPencilSolid;
