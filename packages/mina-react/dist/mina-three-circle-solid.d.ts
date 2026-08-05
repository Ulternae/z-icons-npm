import React from 'react';

export interface MinaThreeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeCircleSolid(props: MinaThreeCircleSolidProps): React.ReactElement;
export default MinaThreeCircleSolid;
