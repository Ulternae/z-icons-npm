import React from 'react';

export interface MinaMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoonStarSolid(props: MinaMoonStarSolidProps): React.ReactElement;
export default MinaMoonStarSolid;
