import React from 'react';

export interface MinaZeroCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroCircleSolid(props: MinaZeroCircleSolidProps): React.ReactElement;
export default MinaZeroCircleSolid;
