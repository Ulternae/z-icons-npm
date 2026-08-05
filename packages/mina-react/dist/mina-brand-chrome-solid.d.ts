import React from 'react';

export interface MinaBrandChromeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandChromeSolid(props: MinaBrandChromeSolidProps): React.ReactElement;
export default MinaBrandChromeSolid;
