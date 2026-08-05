import React from 'react';

export interface MinaWinkCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkCircleSolid(props: MinaWinkCircleSolidProps): React.ReactElement;
export default MinaWinkCircleSolid;
