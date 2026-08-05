import React from 'react';

export interface MinaShootingStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShootingStarSolid(props: MinaShootingStarSolidProps): React.ReactElement;
export default MinaShootingStarSolid;
