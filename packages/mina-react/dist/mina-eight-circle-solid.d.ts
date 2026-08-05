import React from 'react';

export interface MinaEightCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightCircleSolid(props: MinaEightCircleSolidProps): React.ReactElement;
export default MinaEightCircleSolid;
