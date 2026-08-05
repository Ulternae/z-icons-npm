import React from 'react';

export interface MinaNineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineSolid(props: MinaNineSolidProps): React.ReactElement;
export default MinaNineSolid;
