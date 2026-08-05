import React from 'react';

export interface MinaAsteriskCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskCircleSolid(props: MinaAsteriskCircleSolidProps): React.ReactElement;
export default MinaAsteriskCircleSolid;
