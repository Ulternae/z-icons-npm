import React from 'react';

export interface MinaNineCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineCircleSolid(props: MinaNineCircleSolidProps): React.ReactElement;
export default MinaNineCircleSolid;
