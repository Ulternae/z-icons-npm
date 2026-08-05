import React from 'react';

export interface MinaOneCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneCircleSolid(props: MinaOneCircleSolidProps): React.ReactElement;
export default MinaOneCircleSolid;
