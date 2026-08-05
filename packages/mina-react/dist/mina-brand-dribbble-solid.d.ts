import React from 'react';

export interface MinaBrandDribbbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandDribbbleSolid(props: MinaBrandDribbbleSolidProps): React.ReactElement;
export default MinaBrandDribbbleSolid;
