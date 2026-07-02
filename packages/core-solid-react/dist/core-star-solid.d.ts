import React from 'react';

export interface CoreStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStarSolid(props: CoreStarSolidProps): React.ReactElement;
export default CoreStarSolid;
