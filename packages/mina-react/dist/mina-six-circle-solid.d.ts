import React from 'react';

export interface MinaSixCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixCircleSolid(props: MinaSixCircleSolidProps): React.ReactElement;
export default MinaSixCircleSolid;
