import React from 'react';

export interface MinaDotsCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsCircleSolid(props: MinaDotsCircleSolidProps): React.ReactElement;
export default MinaDotsCircleSolid;
