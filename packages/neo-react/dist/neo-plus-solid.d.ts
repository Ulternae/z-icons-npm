import React from 'react';

export interface NeoPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlusSolid(props: NeoPlusSolidProps): React.ReactElement;
export default NeoPlusSolid;
