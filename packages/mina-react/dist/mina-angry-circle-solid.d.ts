import React from 'react';

export interface MinaAngryCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngryCircleSolid(props: MinaAngryCircleSolidProps): React.ReactElement;
export default MinaAngryCircleSolid;
