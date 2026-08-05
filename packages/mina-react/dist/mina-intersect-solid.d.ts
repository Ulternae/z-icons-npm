import React from 'react';

export interface MinaIntersectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIntersectSolid(props: MinaIntersectSolidProps): React.ReactElement;
export default MinaIntersectSolid;
