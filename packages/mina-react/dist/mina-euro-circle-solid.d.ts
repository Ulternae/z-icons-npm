import React from 'react';

export interface MinaEuroCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroCircleSolid(props: MinaEuroCircleSolidProps): React.ReactElement;
export default MinaEuroCircleSolid;
