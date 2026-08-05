import React from 'react';

export interface NeoPawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPawSolid(props: NeoPawSolidProps): React.ReactElement;
export default NeoPawSolid;
