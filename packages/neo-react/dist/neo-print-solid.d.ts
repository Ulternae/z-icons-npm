import React from 'react';

export interface NeoPrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPrintSolid(props: NeoPrintSolidProps): React.ReactElement;
export default NeoPrintSolid;
