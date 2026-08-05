import React from 'react';

export interface MinaUserCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserCircleSolid(props: MinaUserCircleSolidProps): React.ReactElement;
export default MinaUserCircleSolid;
