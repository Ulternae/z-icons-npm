import React from 'react';

export interface MinaMinusCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusCircleSolid(props: MinaMinusCircleSolidProps): React.ReactElement;
export default MinaMinusCircleSolid;
